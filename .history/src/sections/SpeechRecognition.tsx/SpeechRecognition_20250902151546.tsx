import { ScrollArea, Text } from '@radix-ui/themes'
import { useSpeechContext } from '../../contexts/SpeechContext'

const SpeechRecognition = () => {
  const speechRecognizingContent = useSpeechContext()
  return (
    <>
      <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
        <Text as="p">{speechRecognizingContent}</Text>
      </ScrollArea>
    </>
  )
}

export default SpeechRecognition
