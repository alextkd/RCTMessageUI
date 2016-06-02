##RCTMessageUI

React native bridge to MessageUI.framework

###Usage
`
import {MessageUI} from ‘RCTMessageUI';

MessageUI.showMessageComposeWithOptions(
      {
        body: 'Ana are mere',
        recipients: ['11211241', 'b@bb.bbb'],
        disableUserAttachments: true
      }, (error, messageComposeResult) => {
      if (error) {
        console.error(error);
      } else {
        alert('mailComposeResult : ' + messageComposeResult);
      }
    })
`
