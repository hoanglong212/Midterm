import FeatureCard from './FeatureCard'

export default function MoreFeaturesGrid() {
  const features = [
    {
      title: 'Read pdf and attachments',
      description:
        'We do not want to sell you any specific object, our goal is to find the "right" apartment for you and remain partners for many years.',
    },
    {
      title: 'Write mails and replies',
      description:
        'We provide a full range of services for the purchase and sale of real estate, from searching for an object and ending with paperwork.',
    },
    {
      title: 'Scans Images',
      description:
        'We are visionaries We will tell you everything you need about the market at the moment, but also predict how the cost of housing and your areawill change in a few years',
    },
    {
      title: 'Read pdf and attachments',
      description:
        'We do not want to sell you any specific object, our goal is to find the "right" apartment for you and remain partners for many years.',
    },
    {
      title: 'Write mails and replies',
      description:
        'We provide a full range of services for the purchase and sale of real estate, from searching for an object and ending with paperwork.',
    },
    {
      title: 'Scans Images',
      description:
        'We are visionaries We will tell you everything you need about the market at the moment, but also predict how the cost of housing and your areawill change in a few years',
    },
  ]

  return (
    <div className="flex flex-wrap justify-between w-280 mt-25 mr-auto ml-auto border-t border-[#828282] pt-20 gap-15 ">
      {features.map((feature, index) => (
        <FeatureCard key={index} title={feature.title} description={feature.description} />
      ))}
    </div>
  )
}
