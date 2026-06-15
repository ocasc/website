export type Language = 'zh' | 'en';

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsData {
  coreTeam: StatItem;
  community: StatItem;
  reach: StatItem;
}

export interface Translations {
  // Navigation
  nav: {
    siteName: string;
    events: string;
    resources: string;
    about: string;
    joinAction: string;
  };

  // Hero Section
  hero: {
    badge: string;
    titlePrefix: string;
    titleStrikethrough: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };

  // Community Stats
  stats: StatsData;

  // Events Section
  events: {
    title: string;
    description: string;
    allTypes: string;
    upcomingEvents: string;
    pastEvents: string;
    eventTypes: {
      seminar: {
        title: string;
        description: string;
      };
      lecture: {
        title: string;
        description: string;
      };
      course: {
        title: string;
        description: string;
      };
    };
    viewAll: string;
    viewMore: string;
    collapse: string;
    noEvents: string;
    noEventsOfType: string;
    watchVideo: string;
    viewDocument: string;
    registerNow: string;
    comingSoon: string;
  };

  // Resources Section
  resources: {
    title: string;
    description: string;
    categories: {
      courses: {
        title: string;
        description: string;
        items: Array<{
          name: string;
          description: string;
          url: string;
          badge?: string;
        }>;
      };
      projects: {
        title: string;
        description: string;
        items: Array<{
          name: string;
          description: string;
          url: string;
        }>;
      };
      seminars: {
        title: string;
        description: string;
        items: Array<{
          name: string;
          description: string;
          url: string;
        }>;
      };
    };
  };

  // Join Section
  join: {
    title: string;
    description: string;
    button: string;
    note: string;
  };

  // About Section
  about: {
    title: string;
    description: string;
    contact: {
      bilibili: string;
      circle: string;
      linkedin: string;
      github: string;
    };
  };

  // Partners Section
  partners: {
    title: string;
  };

  // Footer
  footer: {
    copyright: string;
  };

  // About Page
  aboutPage: {
    hero: {
      badge: string;
      title: string;
      description: string;
    };
    story: {
      title: string;
      paragraphs: string[];
    };
    milestones: {
      title: string;
      items: Array<{
        period: string;
        title: string;
        description: string;
        comingSoon?: boolean;
      }>;
    };
    team: {
      title: string;
      coreTitle: string;
      coCreatorsTitle: string;
      coCreatorsNote: string;
      linkedinLink: string;
      placeholderName: string;
      placeholderRole: string;
      members: Array<{
        name: string;
        role: string;
      }>;
    };
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      siteName: 'AI安全开放社区',
      events: '活动',
      resources: '资源',
      about: '关于我们',
      joinAction: '加入社区',
    },
    hero: {
      badge: '中文互联网最大的AI安全社区',
      titlePrefix: '推动 AI 走向',
      titleStrikethrough: '更强大',
      titleHighlight: '更安全',
      titleSuffix: '的未来',
      description: '关注 AI 风险、AI 安全技术及 AI 安全治理等前沿话题，通过交流与合作促进 AI 的安全可持续发展。',
      primaryButton: '加入社区',
      secondaryButton: '关于我们',
    },
    stats: {
      coreTeam: { value: '20+', label: '核心共创' },
      community: { value: '200+', label: '社区成员' },
      reach: { value: '10,000+', label: '泛社区覆盖' },
    },
    events: {
      title: '活动',
      description: '关注最新的研讨会、技术讲座和共学课程',
      allTypes: '全部',
      upcomingEvents: '即将举行的活动',
      pastEvents: '往期活动',
      eventTypes: {
        seminar: {
          title: '研讨会',
          description: '参与深度研讨会，发表自己的观点',
        },
        lecture: {
          title: '讲座',
          description: '前沿或科普的主题讲座',
        },
        course: {
          title: '共学课程',
          description: '与其它成员共同学习一门课程',
        },
      },
      viewAll: '查看全部',
      viewMore: '查看更多活动',
      collapse: '收起',
      noEvents: '暂无活动',
      noEventsOfType: '暂无{type}活动',
      watchVideo: '观看视频',
      viewDocument: '查看文档',
      registerNow: '立即报名',
      comingSoon: '敬请期待',
    },
    resources: {
      title: '资源',
      description: '精心整理的AI安全学习资源，帮助您深入了解人工智能安全知识',
      categories: {
        courses: {
          title: '课程资源',
          description: '优质的AI安全在线学习平台',
          items: [
            {
              name: '前沿AI安全课程',
              description: 'OCASC 将 BlueDot Impact 的 AI 安全课程带入中文世界。覆盖 AGI 战略、技术安全与前沿治理，7月5日开课，第一期免费，名额有限。',
              url: 'https://mp.weixin.qq.com/s/Eca3ROQZ4_1ub1x4Nzl_vA',
              badge: '新',
            },
            {
              name: 'BlueDot',
              description: '专业的AI安全教育平台，提供系统性的课程内容',
              url: 'https://bluedot.org/',
            },
            {
              name: 'ML4Good',
              description: '致力于将机器学习应用于社会公益的教育机构',
              url: 'https://www.ml4good.org/',
            },
            {
              name: 'ARENA',
              description: 'AI对齐研究工程师加速器，提供实践性训练',
              url: 'https://www.arena.education/',
            },
          ],
        },
        projects: {
          title: '研究项目',
          description: 'AI安全研究项目，兼职/全职，申请制',
          items: [
            {
              name: 'SPAR',
              description: 'AI对齐研究实习项目，为有志于AI安全研究的人员提供导师指导',
              url: 'https://sparai.org/',
            },
            {
              name: 'MATS',
              description: '机器学习对齐与理论学者项目，培养AI安全研究人才',
              url: 'https://www.matsprogram.org/',
            },
          ],
        },
        seminars: {
          title: '学术研讨会',
          description: 'AI安全领域的定期研讨会和学术讲座',
          items: [
            {
              name: 'BlueDot Reading Group',
              description: 'BlueDot 主办的AI安全读书会，定期组织深度学习和讨论',
              url: 'https://lu.ma/bluedotevents',
            },
            {
              name: 'FAR AI Seminar',
              description: 'FAR AI 举办的研讨会，聚焦 AI 安全研究的前沿进展',
              url: 'https://www.far.ai/events/seminar',
            },
          ],
        },
      },
    },
    join: {
      title: '加入AI安全开放社区',
      description: '填写表单加入我们的社区，获取最新的AI安全资讯和活动通知。',
      button: '加入社区',
      note: '我们会尽快与你取得联系。',
    },
    about: {
      title: '关注我们',
      description:
        'AI安全开放社区（Open Community for AI Safety China）是中文互联网最大的 AI 安全开放性社区，我们关注 AI 风险、AI 安全技术及 AI 安全治理等前沿话题，力图通过交流与合作促进 AI 的安全可持续发展。社区以微信群为核心，并在多个平台同步更新动态。机构合作或意见反馈，可通过邮件或各平台私信联系。',
      contact: {
        bilibili: 'Bilibili',
        circle: '知乎圈子',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    partners: {
      title: '合作伙伴',
    },
    footer: {
      copyright: '© 2026 OCASC. All rights reserved.',
    },
    aboutPage: {
      hero: {
        badge: '中文互联网最大的AI安全社区',
        title: '关于我们',
        description: 'AI安全开放社区（OCASC）由一群关注AI安全的研究者和爱好者共同创立，致力于在中国构建高质量的AI安全知识生态，推动AI的安全可持续发展。',
      },
      story: {
        title: '我们的故事',
        paragraphs: [
          'AI安全开放社区（Open Community for AI Safety China，OCASC）起初是一个小型学习小组，由一群对AI安全充满热情的研究者和爱好者共同创立。我们不定期阅读和讨论国际前沿AI安全研究，随着越来越多志同道合的朋友加入，社区逐渐壮大，成为中文互联网最大的AI安全开放社区。',
          '我们的使命是通过改善前沿AI安全研究的获取渠道、促进技术交流与讨论、建立与国际AI安全网络的连接，在中国构建一个开放、高质量的AI安全生态系统。',
          '目前，社区以微信群为核心，并在Bilibili、知乎、LinkedIn、GitHub等多个平台同步运营，累计覆盖超过10,000名关注者，核心共创成员超过20人，社区成员超过300人。',
        ],
      },
      milestones: {
        title: '里程碑',
        items: [
          {
            period: '2025年4月',
            title: '从学习小组起步',
            description: '一群关注AI安全的学者与研究者相聚，创立AI安全学习小组，开始不定期组织前沿研究的阅读与讨论活动。',
          },
          {
            period: '2026年3月',
            title: '举办AI Control黑客马拉松',
            description: '与国际AI安全研究组织Apart Research合作，在上海举办国内首届AI Control黑客马拉松，约10支参赛团队占全球参赛比例6.5%，赛题围绕Build、Break、Improve三大方向展开。',
          },
          {
            period: '2026年4月',
            title: '构建开放社区生态',
            description: '社区正式更名为「AI安全开放社区」，建立双周研讨会机制，邀请国内外学者开展主题分享，在Bilibili、知乎等平台同步扩大影响力，成员突破200人。',
          },
          {
            period: '即将到来',
            title: '中国版BlueDot课程',
            description: '将国际AI安全社区最受认可的BlueDot课程引入中国，并由资深AI安全专家担任讲师。',
            comingSoon: true,
          },
        ],
      },
      team: {
        title: '团队成员',
        coreTitle: '联合创始人',
        coCreatorsTitle: '共创成员',
        coCreatorsNote: '感谢每一位为社区建设贡献力量的共创成员，期待更多伙伴加入。',
        linkedinLink: 'LinkedIn',
        placeholderName: '即将揭晓',
        placeholderRole: '共创成员',
        members: [
          { name: '王金戈', role: '安远AI研究员，关注评估、可解释性、AI意识、大众科普等方向' },
          { name: '孙圆圆', role: '牛津大学，AI安全与治理研究员，《国际AI安全报告》贡献者' },
          { name: '王巍', role: '素问科技CEO，专注企业级AI应用与风险治理' },
          { name: '柳菁', role: 'AI安全研究员，前亚马逊工程师' },
        ],
      },
    },
  },
  en: {
    nav: {
      siteName: 'Open Community for AI Safety China',
      events: 'Events',
      resources: 'Resources',
      about: 'About',
      joinAction: 'Join Us',
    },
    hero: {
      badge: "China's Largest AI Safety Community",
      titlePrefix: 'Toward a ',
      titleStrikethrough: 'More Powerful',
      titleHighlight: 'Safer',
      titleSuffix: ' Future for AI',
      description:
        'Focusing on AI risks, AI safety technologies and AI safety governance, promoting the safe and sustainable development of AI through collaboration.',
      primaryButton: 'Join Us',
      secondaryButton: 'About Us',
    },
    stats: {
      coreTeam: { value: '20+', label: 'Core Team' },
      community: { value: '200+', label: 'Community' },
      reach: { value: '10,000+', label: 'Extended Reach' },
    },
    events: {
      title: 'Events',
      description:
        'Stay updated with the latest lectures, technical seminars, and co-learning courses',
      allTypes: 'All',
      upcomingEvents: 'Upcoming Events',
      pastEvents: 'Past Events',
      eventTypes: {
        seminar: {
          title: 'Seminars',
          description:
            'Participate in in-depth seminars and share your perspectives',
        },
        lecture: {
          title: 'Lectures',
          description: 'Cutting-edge or popular science lectures',
        },
        course: {
          title: 'Courses',
          description: 'Learn courses together with other members',
        },
      },
      viewAll: 'View All',
      viewMore: 'View More Events',
      collapse: 'Collapse',
      noEvents: 'No events available',
      noEventsOfType: 'No {type} events available',
      watchVideo: 'Video',
      viewDocument: 'Document',
      registerNow: 'Register Now',
      comingSoon: 'Coming Soon',
    },
    resources: {
      title: 'Resources',
      description:
        'Carefully curated AI safety learning resources to help you deepen your understanding of artificial intelligence safety',
      categories: {
        courses: {
          title: 'Course Resources',
          description: 'High-quality online AI safety learning platforms',
          items: [
            {
              name: 'AI Safety Course',
              description: 'OCASC brings the BlueDot Impact AI safety curriculum to the Chinese-speaking world. Covering AGI strategy, technical safety & frontier governance. Starts July 5, first cohort is free, limited spots.',
              url: 'https://mp.weixin.qq.com/s/Eca3ROQZ4_1ub1x4Nzl_vA',
              badge: 'NEW',
            },
            {
              name: 'BlueDot',
              description:
                'Professional AI safety education platform with systematic course content',
              url: 'https://bluedot.org/',
            },
            {
              name: 'ML4Good',
              description:
                'Educational institution dedicated to applying machine learning for social good',
              url: 'https://www.ml4good.org/',
            },
            {
              name: 'ARENA',
              description:
                'AI alignment research engineer accelerator with practical training',
              url: 'https://www.arena.education/',
            },
          ],
        },
        projects: {
          title: 'Research Projects',
          description:
            'AI safety research projects, part-time/full-time, application-based',
          items: [
            {
              name: 'SPAR',
              description:
                'Supervised Program for Alignment Research — a remote research program pairing aspiring AI safety researchers with mentors',
              url: 'https://sparai.org/',
            },
            {
              name: 'MATS',
              description:
                'Machine Learning Alignment & Theory Scholars, training AI safety researchers',
              url: 'https://www.matsprogram.org/',
            },
          ],
        },
        seminars: {
          title: 'Academic Seminars',
          description:
            'Regular seminars and academic talks in AI safety',
          items: [
            {
              name: 'BlueDot Reading Group',
              description:
                'BlueDot-hosted AI safety reading groups with regular in-depth learning and discussions',
              url: 'https://lu.ma/bluedotevents',
            },
            {
              name: 'FAR AI Seminar',
              description:
                'FAR AI seminar series focusing on frontier AI safety research',
              url: 'https://www.far.ai/events/seminar',
            },
          ],
        },
      },
    },
    join: {
      title: 'Join Open Community for AI Safety China',
      description:
        'Fill out the form to join our community and receive the latest AI safety news and event updates.',
      button: 'Join Us',
      note: "We'll get in touch with you soon.",
    },
    about: {
      title: 'Follow Us',
      description:
        'Open Community for AI Safety China (OCASC) is the largest AI safety open community in the Chinese-speaking internet. We focus on AI risks, AI safety technologies and AI safety governance, aiming to promote the safe and sustainable development of AI. The community is centered around WeChat groups and syncs updates across multiple platforms. For institutional cooperation or feedback, please reach out via email or direct message on any platform.',
      contact: {
        bilibili: 'Bilibili',
        circle: 'Zhihu Ring',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    partners: {
      title: 'Partners',
    },
    footer: {
      copyright: '© 2026 OCASC. All rights reserved.',
    },
    aboutPage: {
      hero: {
        badge: "China's Largest AI Safety Community",
        title: 'About Us',
        description: 'Open Community for AI Safety China (OCASC) was founded by researchers and enthusiasts passionate about AI safety, dedicated to building a high-quality AI safety knowledge ecosystem in China.',
      },
      story: {
        title: 'Our Story',
        paragraphs: [
          'Open Community for AI Safety China (OCASC) began as a small study group, founded by a group of researchers and enthusiasts passionate about AI safety. We started by periodically reading and discussing frontier international AI safety research. As more like-minded people joined, the community grew to become the largest AI safety open community in the Chinese-speaking internet.',
          'Our mission is to support an open, high-quality AI safety ecosystem in China by improving access to frontier AI safety research, fostering technical discussion, and building connections with the global AI safety network.',
          'Today, the community is centered around WeChat groups and active across multiple platforms including Bilibili, Zhihu, LinkedIn, and GitHub, reaching over 10,000 followers, with 300+ community members and 20+ core contributors.',
        ],
      },
      milestones: {
        title: 'Milestones',
        items: [
          {
            period: 'April 2025',
            title: 'Starting as a Study Group',
            description: 'A group of scholars and researchers interested in AI safety came together to found the AI Safety Study Group, beginning periodic reading sessions and discussions on frontier research.',
          },
          {
            period: 'March 2026',
            title: 'AI Control Hackathon',
            description: "In collaboration with Apart Research, the community hosted China's first AI Control Hackathon in Shanghai. About 10 teams participated — 6.5% of global submissions — competing across Build, Break, and Improve tracks.",
          },
          {
            period: 'April 2026',
            title: 'Building an Open Community',
            description: 'The community was officially renamed to Open Community for AI Safety China. Bi-weekly seminars were established with invited scholars, while presence expanded across Bilibili, Zhihu and other platforms, surpassing 200 members.',
          },
          {
            period: 'Coming Soon',
            title: 'BlueDot Course — China Edition',
            description: "Bringing the internationally recognized BlueDot AI safety curriculum to China, with lectures delivered by senior AI safety experts.",
            comingSoon: true,
          },
        ],
      },
      team: {
        title: 'Our Team',
        coreTitle: 'Co-Founders',
        coCreatorsTitle: 'Co-creators',
        coCreatorsNote: 'Thank you to every co-creator who has contributed to building this community. We welcome more partners to join.',
        linkedinLink: 'LinkedIn',
        placeholderName: 'Coming Soon',
        placeholderRole: 'Co-creator',
        members: [
          { name: 'Jinge Wang', role: 'Researcher at Anzhiyuan AI; focused on evaluation, interpretability, AI consciousness, and science communication' },
          { name: 'Yuanyuan Sun', role: 'University of Oxford; AI safety & governance researcher; contributor to the International AI Safety Report' },
          { name: 'Wei Wang', role: 'CEO of Suwen Technology; focused on enterprise AI applications and risk governance' },
          { name: 'Jing Liu', role: 'AI safety researcher; former Amazon engineer' },
        ],
      },
    },
  },
};
