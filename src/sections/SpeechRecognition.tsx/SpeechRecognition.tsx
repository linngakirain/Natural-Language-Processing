import { ScrollArea, Text } from '@radix-ui/themes'
import { useSpeechContext } from '../../contexts/SpeechContext'

const SpeechRecognition = () => {
  const {
    speechRecognizingContent,
    speechRecognizedContent,
    speechTranscribedContent,
    speechTranscribingContent,
  } = useSpeechContext()
  return (
    <>
      <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
        <Text as="p">{speechRecognizingContent} hello world</Text>

        <Text as="p">{speechRecognizedContent}</Text>

        <Text as="p">{speechTranscribedContent}</Text>

        <Text as="p">{speechTranscribingContent}</Text>
      </ScrollArea>
    </>
  )
}

export default SpeechRecognition
