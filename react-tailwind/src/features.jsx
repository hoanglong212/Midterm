import TrendingPromptsPage from './FeatureComponents/PromptCommand'
import GenImage from './FeatureComponents/GenImage'
import SeeTrendingPrompt from './FeatureComponents/SeeTrendingPrompt'
import GenAudio from './FeatureComponents/GenAudio'
import MoreFeatures from './FeatureComponents/MoreFeatures'
import CreateAccount from './FeatureComponents/CreateAccount'
export default function Features() {
  return (
    <div className="bg-black  text-white ">
      <SeeTrendingPrompt></SeeTrendingPrompt>
      <TrendingPromptsPage></TrendingPromptsPage>
      <div className="mt-60 mb-60">
        <GenImage></GenImage>
        <GenAudio></GenAudio>
        <MoreFeatures></MoreFeatures>
        <CreateAccount></CreateAccount>
      </div>
    </div>
  )
}
