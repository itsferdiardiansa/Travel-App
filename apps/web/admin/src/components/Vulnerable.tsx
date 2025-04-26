import React from 'react'

interface Props {
  userInput: string
}

const VulnerablePage: React.FC<Props> = ({ userInput }) => {
  return <div dangerouslySetInnerHTML={{ __html: userInput }} />
}

export default VulnerablePage
