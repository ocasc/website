import CertificatePage from './CertificatePage'
import { findCertificate } from './_data/registry.server'

// Each response contains at most the requested person's record, never the full roster.
export const dynamic = 'force-dynamic'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string | string[] }>
}) {
  const params = await searchParams
  const id = typeof params.id === 'string' ? params.id : null
  return <CertificatePage rawId={id} record={findCertificate(id)} />
}
