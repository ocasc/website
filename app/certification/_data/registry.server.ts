import 'server-only'
import studentsData from './students.json'
import type { CertificateRecord, Track } from './certificates'

interface StudentEntry {
  id: string
  nameZh: string
  nameEn?: string
  track: Track
}

/** Resolve one certificate on the server; never send the registry to browsers. */
export function findCertificate(id: string | null): CertificateRecord | undefined {
  if (!id?.trim()) return undefined
  const student = (studentsData as StudentEntry[]).find(
    (entry) => entry.id.toLowerCase() === id.trim().toLowerCase(),
  )
  if (!student) return undefined
  return {
    ...student,
    cohort: '第一期',
    issuedAt: '2026-09-07',
  }
}
