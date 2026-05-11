import { useTranslation } from 'react-i18next'

export default function StatsSection() {
  const { t } = useTranslation()

  const stats = [
    { num: '5', label: t('stats.domains') },
    { num: '10', label: t('stats.members') },
    { num: '2022', label: t('stats.founded') },
    { num: 'RCA', label: t('stats.coverage') },
  ]

  return (
    <div className="stats-band">
      <div className="awabel-container">
        <div className="row g-0">
          {stats.map((s, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="stat-item">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
