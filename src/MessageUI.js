'use strict';

import invariant from 'fbjs/lib/invariant';

import {
    NativeModules,
    processColor
} from 'react-native';

let RCTMessageUIManager = NativeModules.MessageUIManager;

/**
* MessageUI class to handle native message intialization
*/
let MessageUI = {
    /**
     * Returns YES if the device can send text messages or NO if it cannot.
     */
    canSendText(callback: Function) {
        invariant(
            typeof callback === 'function',
            'Must provide a valid callback'
        );
        RCTMessageUIManager.canSendText(callback);
    },

    /**
     * Returns YES if the device can send attachments in MMS or iMessage messages, or NO otherwise.
     */
    canSendAttachments(callback: Function) {
        invariant(
            typeof callback === 'function',
            'Must provide a valid callback'
        );
        RCTMessageUIManager.canSendAttachments(callback);
    },

    /**
     * Returns YES if the device can include subject lines in messages, or NO otherwise.
     */
    canSendSubject(callback: Function) {
        invariant(
            typeof callback === 'function',
            'Must provide a valid callback'
        );
        RCTMessageUIManager.canSendSubject(callback);
    },

    /**
     * Returns YES if a file with the specified UTI can be attached to the message, or NO otherwise.
     * - `uti` (string) The UTI (Uniform Type Identifier) in question.
     */
    isSupportedAttachmentUTI(uti: String, callback: Function) {
        invariant(
            typeof uti === 'string' && uti !== null,
            'uti must be a valid string'
        );
        invariant(
            typeof callback === 'function',
            'Must provide a valid callback'
        );
        RCTMessageUIManager.isSupportedAttachmentUTI(uti, callback);
    },

    /**
     * Returns YES if the user has set up the device for sending email, or NO otherwise.
     */
    canSendMail(callback: Function) {
        invariant(
            typeof callback === 'function',
            'Must provide a valid callback'
        );
        RCTMessageUIManager.canSendMail(callback);
    },

    /**
     * Display an iOS message composer. The `options` object must contain one or more
     * of:
     *
     * - `body` (string) - SMS body
     * - `recipients` (array of strings) - a list of phone numbers
     * - `disableUserAttachments` (bool) - if true, disables the camera/attachment button in the message composition view
     */
    showMessageComposeWithOptions(options: Object, callback: Function) {
        invariant(
            typeof options === 'object' && options !== null,
            'Options must be a valid object'
        );
        invariant(
            typeof callback === 'function',
            'Must provide a valid callback'
        );
        RCTMessageUIManager.showMessageComposeWithOptions({...options,
                tintColor: processColor(options.tintColor)
            },
            callback
        );
    },

    /**
     * Display an iOS mail composer. The `options` object must contain one or more
     * of:
     *
     * - `subject` (string) - mail subject
     * - `body` (string) - mail body as plain text (No HTML)
     * - `toRecipients` (array of strings) - a list of email addresses
     * - `ccRecipients` (array of strings) - a list of email addresses
     * - `bccRecipients` (array of strings) - a list of email addresses
     */
    showEmailComposeWithOptions(options: Object, callback: Function) {
        invariant(
            typeof options === 'object' && options !== null,
            'Options must be a valid object'
        );
        invariant(
            typeof callback === 'function',
            'Must provide a valid callback'
        );
        RCTMessageUIManager.showEmailComposeWithOptions({...options,
                tintColor: processColor(options.tintColor)
            },
            callback
        );
    }

};
export default MessageUI;
