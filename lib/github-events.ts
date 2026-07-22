// GitHub Events Integration
// 这个文件提供了从GitHub自动获取事件数据的功能

export interface GitHubEventData {
  id: string;
  type: 'seminar' | 'lecture' | 'course';
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  videoLink?: string;
  documentLink?: string;
  speaker?: string;
  tags: string[];
  isUpcoming: boolean;
  content?: string; // 从GitHub文件解析的原始内容
}

// GitHub API 配置
const GITHUB_CONFIG = {
  owner: 'ocasc',
  repo: 'doc',
  apiBase: 'https://api.github.com',
  token: process.env.GITHUB_TOKEN || '',
};

// 从GitHub获取文件内容
async function fetchGitHubFile(path: string, signal?: AbortSignal): Promise<string | null> {
  try {
    const url = `${GITHUB_CONFIG.apiBase}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${path}`;

    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // 如果有token，添加到headers中
    if (GITHUB_CONFIG.token) {
      headers['Authorization'] = `token ${GITHUB_CONFIG.token}`;
    }

    try {
      const response = await fetch(url, {
        headers,
        signal,
      });

      if (!response.ok) {
        console.error(`Failed to fetch ${path}: ${response.status}`);
        return null;
      }

      const data = await response.json();

      // GitHub API返回base64编码的内容，正确解码UTF-8字符
      if (data.content && data.encoding === 'base64') {
        try {
          // Node.js环境
          if (typeof Buffer !== 'undefined') {
            return Buffer.from(data.content, 'base64').toString('utf-8');
          }

          // 浏览器环境，使用TextDecoder解码UTF-8
          const binaryString = atob(data.content);
          const bytes = new Uint8Array(binaryString.length);
          for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          return new TextDecoder('utf-8').decode(bytes);
        } catch (error) {
          console.error('Error decoding base64 content:', error);
          return atob(data.content);
        }
      }

      return null;
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.error(`Aborted fetching ${path}`);
        return null;
      }
      throw error;
    }
  } catch (error) {
    console.error('Error fetching GitHub file:', error);
    return null;
  }
}

// 格式化日期为 YYYY/MM/DD 格式
function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  
  // 处理中文日期格式：2026 年 2 月 26 日 或 2026年2月26日
  const chineseDateMatch = dateStr.match(/(\d{4})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/);
  if (chineseDateMatch) {
    const year = chineseDateMatch[1];
    const month = chineseDateMatch[2].padStart(2, '0');
    const day = chineseDateMatch[3].padStart(2, '0');
    return `${year}/${month}/${day}`;
  }
  
  // 处理 YYYY-MM-DD 格式
  const dashDateMatch = dateStr.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (dashDateMatch) {
    const year = dashDateMatch[1];
    const month = dashDateMatch[2].padStart(2, '0');
    const day = dashDateMatch[3].padStart(2, '0');
    return `${year}/${month}/${day}`;
  }
  
  // 处理 YYYY/M/D 格式（范围日期会使用开始日期）
  const yearFirstSlashDateMatch = dateStr.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
  if (yearFirstSlashDateMatch) {
    const year = yearFirstSlashDateMatch[1];
    const month = yearFirstSlashDateMatch[2].padStart(2, '0');
    const day = yearFirstSlashDateMatch[3].padStart(2, '0');
    return `${year}/${month}/${day}`;
  }

  // 处理 MM/DD/YYYY 格式
  const slashDateMatch = dateStr.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (slashDateMatch) {
    const year = slashDateMatch[3];
    const month = slashDateMatch[1].padStart(2, '0');
    const day = slashDateMatch[2].padStart(2, '0');
    return `${year}/${month}/${day}`;
  }
  
  // 如果无法解析，返回原字符串（去除空格）
  return dateStr.replace(/\s+/g, '');
}

// 格式化时间为 HH:mm~HH:mm 格式
function formatTime(timeStr: string): string {
  if (!timeStr) return '';
  
  // 处理 HH:mm~HH:mm 或 HH:mm-HH:mm 格式（去除空格）
  const rangeMatch = timeStr.match(/(\d{1,2})\s*:\s*(\d{2})\s*[~-]\s*(\d{1,2})\s*:\s*(\d{2})/);
  if (rangeMatch) {
    const startHour = rangeMatch[1].padStart(2, '0');
    const startMin = rangeMatch[2];
    const endHour = rangeMatch[3].padStart(2, '0');
    const endMin = rangeMatch[4];
    return `${startHour}:${startMin}~${endHour}:${endMin}`;
  }
  
  // 处理单个时间 HH:mm（带或不带 AM/PM）
  const singleTimeMatch = timeStr.match(/(\d{1,2})\s*:\s*(\d{2})(?:\s*([AP]M))?/i);
  if (singleTimeMatch) {
    let hour = parseInt(singleTimeMatch[1]);
    const min = singleTimeMatch[2];
    const ampm = singleTimeMatch[3]?.toUpperCase();
    
    // 处理 12 小时制
    if (ampm === 'PM' && hour < 12) hour += 12;
    if (ampm === 'AM' && hour === 12) hour = 0;
    
    const formattedHour = hour.toString().padStart(2, '0');
    return `${formattedHour}:${min}`;
  }
  
  // 如果无法解析，返回原字符串（去除空格）
  return timeStr.replace(/\s+/g, '');
}

// 解析Markdown文件中的事件信息
function parseEventFromMarkdown(content: string, filePath: string): GitHubEventData | null {
  try {
    // 提取标题（第一个#标题）
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : '未知事件';

    // 改进的日期提取 - 支持多种格式
    let date = '';
    const datePatterns = [
      /(?:\*\*)?日期(?:\*\*)?[：:]\s*(.+)/i,
      /Date[：:]\s*(.+)/i,
      /(\d{4}\s*年\s*\d{1,2}\s*月\s*\d{1,2}\s*日)/,
      /(\d{4}-\d{1,2}-\d{1,2})/,
      /(\d{1,2}\/\d{1,2}\/\d{4})/
    ];

    for (const pattern of datePatterns) {
      const match = content.match(pattern);
      if (match) {
        date = formatDate(match[1].trim());
        break;
      }
    }

    // 改进的时间提取
    let time = '';
    const timePatterns = [
      /\*\*时间\*\*[：:]\s*(.+)/i,
      /Time[：:]\s*(.+)/i,
      /(\d{1,2}:\d{2}[~-]\d{1,2}:\d{2})/,
      /(\d{1,2}:\d{2}(?:\s*[AP]M)?)/i
    ];

    for (const pattern of timePatterns) {
      const match = content.match(pattern);
      if (match) {
        time = formatTime(match[1].trim());
        break;
      }
    }

    // 改进的地点提取 - 优先查找腾讯会议号和链接
    let location = '线上';

    // 查找腾讯会议链接和ID（但最终展示时只显示“腾讯会议”）
    const meetingLinkPatterns = [
      /\[腾讯会议\]\((https:\/\/meeting\.tencent\.com[^)]+)\)/i,
      /腾讯会议.*?(https:\/\/meeting\.tencent\.com[^\s\)]+)/i,
      /https:\/\/meeting\.tencent\.com[^\s\)]+/i
    ];

    for (const pattern of meetingLinkPatterns) {
      const match = content.match(pattern);
      if (match) {
        // 无论是否能提取到会议ID，展示时统一用“腾讯会议”
        location = '腾讯会议';
        break;
      }
    }

    // 如果没有找到腾讯会议链接，查找会议ID（包括带连字符的形式，如 524-4055-7044）
    if (location === '线上') {
      const meetingIdPatterns = [
        /腾讯会议.*?([\d\-]{9,})/i,
        /会议.*?ID.*?[：:]?\s*([\d\-]{9,})/i,
        /会议号.*?[：:]?\s*([\d\-]{9,})/i,
        /Meeting.*?ID.*?[：:]?\s*([\d\-]{9,})/i
      ];

      for (const pattern of meetingIdPatterns) {
        const match = content.match(pattern);
        if (match) {
          // 提取出纯数字，兼容 524-4055-7044 这类格式
          const digitsOnly = match[1].replace(/\D/g, '');
          if (digitsOnly.length >= 9) {
            // 只要能识别出腾讯会议号，展示时统一用“腾讯会议”
            location = '腾讯会议';
            break;
          }
        }
      }
    }

    // 如果仍没有找到会议信息，使用其他地点信息
    if (location === '线上') {
      const locationPatterns = [
        /\*\*地点\*\*[：:]\s*(.+)/i,
        /Location[：:]\s*(.+)/i,
        /\*\*场所\*\*[：:]\s*(.+)/i
      ];

      for (const pattern of locationPatterns) {
        const match = content.match(pattern);
        if (match) {
          location = match[1].trim();
          break;
        }
      }
    }

    // 改进的演讲者提取
    let speaker = '';
    const speakerPatterns = [
      /\*\*主讲人\*\*[：:]\s*(.+?)(?:\n|$)/i,
      /\*\*演讲者\*\*[：:]\s*(.+?)(?:\n|$)/i,
      /Speaker[：:]\s*(.+?)(?:\n|$)/i,
      /\*\*讲师\*\*[：:]\s*(.+?)(?:\n|$)/i
    ];

    for (const pattern of speakerPatterns) {
      const match = content.match(pattern);
      if (match) {
        speaker = match[1].trim();
        // 清理演讲者信息中的额外内容（如联系方式）
        speaker = speaker.replace(/\s*-\s*.+$/, '').trim();
        break;
      }
    }

    // 提取视频链接 - 支持多种格式
    const videoMatch = content.match(/\[视频\]\((https?:\/\/[^)]+)\)/i) ||
      content.match(/\[Video\]\((https?:\/\/[^)]+)\)/i) ||
      content.match(/\[观看视频\]\((https?:\/\/[^)]+)\)/i) ||
      content.match(/\[B站\]\((https?:\/\/[^)]+)\)/i) ||
      content.match(/\[YouTube\]\((https?:\/\/[^)]+)\)/i) ||
      content.match(/(https?:\/\/[^\s\)]+(?:bilibili|youtube|vimeo)[^\s\)]*)/i);
    // 处理匹配结果：如果有捕获组用match[1]，否则用match[0]，并去除末尾的右括号
    let videoLink: string | undefined = undefined;
    if (videoMatch) {
      const url = videoMatch[1] || videoMatch[0];
      videoLink = url ? url.replace(/\)+$/, '') : undefined;
    }

    // 根据文件路径确定事件类型
    let type: 'seminar' | 'lecture' | 'course' = 'lecture'; // 默认为讲座
    if (filePath.includes('seminar') || filePath.includes('讨论')) type = 'seminar';
    else if (filePath.includes('course') || filePath.includes('课程')) type = 'course';
    else if (filePath.includes('talk') || filePath.includes('讲座')) type = 'lecture';

    // 生成ID
    const id = filePath.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();

    // 判断是否为即将举行的活动 - 根据实际情况，这些都不是即将举行的活动
    const isUpcoming = false;

    // 简化描述 - 不显示详细的格式化信息
    let description = '';

    // 尝试提取活动的简短描述
    const descriptionPatterns = [
      // 匹配标题后的第一段描述性文字
      /#\s+.+?\n\n([^*+#\-\[\]]+?)(?:\n\n|\n[*+#\-\[\]]|$)/,
      // 匹配简单的描述行
      /(?:简介|描述|介绍)[：:]?\s*(.+?)(?:\n|$)/i,
    ];

    for (const pattern of descriptionPatterns) {
      const match = content.match(pattern);
      if (match && match[1].trim().length > 10) {
        description = match[1].trim();
        break;
      }
    }

    // 如果没有找到合适的描述，使用标题作为描述
    if (!description) {
      description = `${type === 'seminar' ? '研讨会' : type === 'course' ? '课程' : '讲座'}：${title}`;
    }

    // 限制描述长度
    if (description.length > 100) {
      description = description.substring(0, 100) + '...';
    }


    // 提取标签 - 更智能的关键词提取
    const tags: string[] = [];
    const tagKeywords = [
      'AI对齐', 'AI安全', '大语言模型', 'LLM', '机器学习', '深度学习',
      '可解释性', 'RLHF', '宪法AI', '对齐研究', '安全风险', '隐私保护',
      '算法公平性', '对抗攻击', '模型安全', '人工智能', '神经网络', '多模态'
    ];

    tagKeywords.forEach(keyword => {
      if (content.toLowerCase().includes(keyword.toLowerCase())) {
        tags.push(keyword);
      }
    });

    // 如果没有找到标签，尝试从标题中提取
    if (tags.length === 0) {
      if (title.includes('AI') || title.includes('人工智能')) tags.push('AI安全');
      if (title.includes('对齐')) tags.push('AI对齐');
      if (title.includes('安全')) tags.push('安全风险');
      if (title.includes('模型')) tags.push('大语言模型');
      if (title.includes('共学') || title.includes('研讨')) tags.push('学习交流');
    }

    return {
      id,
      type,
      title,
      description,
      date,
      time,
      location,
      videoLink,
      documentLink: `https://github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/blob/main/${filePath}`,
      speaker,
      tags: tags.slice(0, 4), // 限制标签数量
      isUpcoming,
      content,
    };
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return null;
  }
}

// 自动发现仓库中的事件文件
async function discoverEventFiles(signal?: AbortSignal): Promise<string[]> {
  try {
    const url = `${GITHUB_CONFIG.apiBase}/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents`;

    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (GITHUB_CONFIG.token) {
      headers['Authorization'] = `token ${GITHUB_CONFIG.token}`;
    }

    let response;
    try {
    response = await fetch(url, {
      headers,
      signal,
    });
    } catch (error: any) {
      if (error.name === 'AbortError') {
      console.error('Aborted fetching repository contents');
      } else {
        console.error('Error fetching repository contents:', error);
      }
      return [];
    }

    if (!response.ok) {
      console.error(`Failed to fetch repository contents: ${response.status}`);
      return [];
    }

    const files = await response.json();

    // 筛选出以 talk-, course-, seminar- 开头的 .md 文件
    const eventFiles = files
      .filter((file: any) =>
        file.type === 'file' &&
        file.name.endsWith('.md') &&
        (file.name.startsWith('talk-') ||
          file.name.startsWith('course-') ||
          file.name.startsWith('seminar-'))
      )
      .map((file: any) => file.name);

    console.log('发现的事件文件:', eventFiles);
    return eventFiles;
  } catch (error) {
    console.error('Error discovering event files:', error);
    return [];
  }
}

// 获取所有事件数据（支持外部传入 AbortSignal，实现全链路可取消）
export async function fetchAllEvents(signal?: AbortSignal): Promise<GitHubEventData[]> {
  try {
    // 自动发现事件文件
    const filePaths = await discoverEventFiles(signal);

    if (filePaths.length === 0) {
      console.log('未发现任何事件文件，使用默认文件列表');
      // 如果自动发现失败，使用默认文件列表
      const defaultFiles = [
        'talk-01-black-box-is-not-black.md',
        'talk-02-introduction-to-ai-safety.md',
        'talk-03-overcoming-core-knowledge-deficits-in-multi-modal-language-models.md',
        'seminar-01.md',
        'course-01-llm-agents.md',
      ];
      filePaths.push(...defaultFiles);
    }

    const events: GitHubEventData[] = [];

    // 并行获取所有文件
    const promises = filePaths.map(async (filePath) => {
      const content = await fetchGitHubFile(filePath, signal);
      if (content) {
        const event = parseEventFromMarkdown(content, filePath);
        if (event) {
          events.push(event);
        }
      }
    });

    await Promise.all(promises);

    // 按日期从近到远排序
    events.sort((a, b) => {
      const parseEventDate = (dateStr: string) => {
        const match = dateStr.match(/^(\d{4})\/(\d{2})\/(\d{2})$/);
        if (!match) return null;

        return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
      };

      const dateA = parseEventDate(a.date);
      const dateB = parseEventDate(b.date);

      if (dateA !== null && dateB !== null) {
        return dateB - dateA;
      }

      if (dateA !== null) return -1;
      if (dateB !== null) return 1;

      return a.title.localeCompare(b.title);
    });

    console.log(`成功解析 ${events.length} 个事件`);
    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

// 获取单个事件数据（支持外部传入 AbortSignal）
export async function fetchEventById(id: string, signal?: AbortSignal): Promise<GitHubEventData | null> {
  try {
    const events = await fetchAllEvents(signal);
    return events.find(event => event.id === id) || null;
  } catch (error) {
    console.error('Error fetching event by ID:', error);
    return null;
  }
}

// 刷新事件数据的函数（可以在GitHub Actions中使用，支持传入 AbortSignal）
export async function refreshEventsData(signal?: AbortSignal): Promise<GitHubEventData[]> {
  console.log('Refreshing events data from GitHub...');
  const events = await fetchAllEvents(signal);
  console.log(`Fetched ${events.length} events from GitHub`);
  return events;
}

// 导出配置信息
export const githubConfig = GITHUB_CONFIG;
