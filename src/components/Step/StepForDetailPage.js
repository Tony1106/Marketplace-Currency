import React from 'react'
import { Step, Icon } from 'semantic-ui-react'

const StepForDetailPage = () => (
    <Step.Group widths={3}>
    <Step active>
      <Icon name='balance scale' />
      <Step.Content>
        <Step.Title>Offer Rate</Step.Title>
        <Step.Description>Offer the best rate to Buyer/Seller</Step.Description>
      </Step.Content>
    </Step>
    <Step >
      <Icon name='lock' />
      <Step.Content>
        <Step.Title>Lock Rate</Step.Title>
        <Step.Description>Buyer & Seller both agree to lock the rate</Step.Description>
      </Step.Content>
    </Step> 
    <Step>
      <Icon name='money bill alternate' />
      <Step.Content>
        <Step.Title>Trading</Step.Title>
        <Step.Description>Buyer & Seller start trading</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepForDetailPage   