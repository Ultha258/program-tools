Feature: Portal Footer

    Background: A user is viewing the portal
        Given a hosted portal
        And a user is viewing the portal
        And the portal has a footer

    Scenario Outline: FAQ and T&C links/text are configurable and open in a new page when clicked
        Given the footer has prop "terms-link" with value "https://example.com/terms"
        And prop "terms-text" with value "Terms and Conditions"
        And prop "faq-link" with value "https://example.com/FAQ"
        And prop "faq-text" with value "Visit FAQ"
        When a user clicks on the "Visit FAQ" link
        Then they will be redirected to "https://example.com/FAQ" in a new page
        When they go back to the portal
        And click on the "Terms and Conditions" link
        Then they will be redirected to "https://example.com/terms" in a new page

    Scenario Outline: FAQ/T&C Links are not shown if a link is not provided
        Given the footer does not have <linkProp>
        But it <mayHave> <textProp> with <value>
        Then the <link> will not be shown in the footer
        Examples:
            | linkProp   | mayHave      | textProp  | value                | link     |
            | terms-link | has          | termsText | Terms and Conditions | T&C Link |
            | faq-link   | has          | faqText   | Visit FAQ            | FAQ Link |
            | terms-link | doesn't have |           |                      | T&C Link |
            | faq-link   | doesn't have |           |                      | FAQ Link |

    Scenario Outline: The support email and text is configurable but has a default
        Given the footer <mayHave> <emailPropWithValue>
        And the footer <mayAlsoHave> <textPropWithValue>
        Then the footer's support email text is <renderedEmailText>
        And the email address will be a mailto link with <mailtoEmail>
        When the user clicks on the email address mailto Link
        Then the users preferred email client will open with a draft email to <mailtoEmail>
        Examples:
            | mayHave      | emailPropWithValue     | mayAlsoHave  | textPropWithValue                  | mailtoEmail            | renderedEmailText                                 |
            | has          | support@saasquatch.com | has          | For support please contact {email} | support@saasquatch.com | For support please contact support@saasquatch.com |
            | doesn't have | N/A                    | doesn't have | N/A                                | support@example.com    | For program support, contact support@example.com  |

    Scenario Outline: Powered by SaaSquatch is shown by default
        Given the footer <mayHaveProp> "hide-powered-by" with <value>
        Then the powered by SaaSquatch image <mayBeShown>
        Examples:
            | mayHaveProp       | value | mayBeShown  |
            | has prop          | true  | isn't shown |
            | has prop          | false | is shown    |
            | has prop          | test  | isn't shown |
            | has prop          |       | isn't shown |
            | doesn't have prop |       | is shown    |

    Scenario Outline: Support text is shown by default
        Given the footer <mayHaveProp> "hide-support-text" with <value>
        Then the support text <mayBeShown>
        Examples:
            | mayHaveProp       | value | mayBeShown  |
            | has prop          | true  | isn't shown |
            | has prop          | false | is shown    |
            | has prop          | test  | isn't shown |
            | has prop          |       | isn't shown |
            | doesn't have prop |       | is shown    |

    Scenario: Powered By Saasquatch links out to "https://saasquatch.com"
        Given the footer has the powered by SaaSquatch image
        When a user clicks on it
        Then they will be redirected to "https://saasquatch.com" in a new page

    Scenario: Support text can be hidden
        Given a user is viewing the footer component
        Then they see an option called "Hide the support text"
        When they toggle this option
        Then the footer support text is hidden