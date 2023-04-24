@author:truman
@owner:truman
Feature: Coupon Code

    The coupon code component is a box that allows users to see and copy their coupon code for a given program

    @motivating
    Scenario: A Users sharelink can be copied to their clipboard
        Given tooltipText is "hello tooltip"
        When the component renders
        Then there is a textbox with the user's coupon code
        When the clipboard icon is clicked
        Then the link is copied to clipboard
        And a tooltip appears for ~1 second

    @motivating
    Scenario: Component only looks at fueltank rewards
        Given a user has multiple rewards of different types
        When the component is loaded
        Then it filters the user's reward to only return FUELTANK rewards

    @motivating
    Scenario: The first reward is the reward that is displayed
        Given a user has at least one fueltank reward
        And the fueltank reward is available
        Then the coupon-code component shows the first reward returned

    @motivating
    Scenario Outline: Coupon code has multiple states depending on reward status
        Given a user has at least one fueltank reward
        And the reward has most recent status <status>
        And the dateScheduledFor field is <dateScheduledFor>
        Then the component's status is set to <componentStatus>

        Examples:
            | status    | dateScheduledFor | componentStatus |
            | AVAILABLE | null             | AVAILABLE       |
            | EXPIRED   | null             | EXPIRED         |
            | REDEEMED  | null             | REDEEMED        |
            | CANCELLED | null             | CANCELLED       |
            | PENDING   | null             | EMPTY_TANK      |
            | PENDING   | 123412341234     | PENDING         |
            | null      | null             | ERROR           |

    @motivating
    Scenario Outline: Component displays a error message text prop depending on reward status
        Given the component has the internal reward status <status>
        When the component is loaded
        Then the <errorMessageTextProp> is displayed under the input field

        Examples:
            | status     | errorMessageTextProp  |
            | AVAILABLE  | availableMessage      |
            | EXPIRED    | expiredErrorMessage   |
            | REDEEMED   | redeemedMessage       |
            | CANCELLED  | cancelledErrorMessage |
            | EMPTY_TANK | emptyTankErrorMessage |
            | PENDING    | pendingErrorMessage   |
            | ERROR      | genericErrorMessage   |


    @minutia
    Scenario: Tooltip lifespan defaults to 2000
        Given the tooltip's lifespan is set to 2000
        And there is tooltip text
        When the component renders
        And the clipboard icon is clicked
        Then a tooltip appears for ~2 seconds

    @ui
    Scenario: Component shows an error state when there are no coupon codes
        Given a user is viewing the coupon code component
        When there are no coupon code to display
        Then the coupon code input box has a red border
        And there is red help text about the error
        And in place of the coupon code is "CODE ERROR"
        When the copy button's position is set to "below"
        Then the red help text is below the copy button

    @ui
    Scenario: Component shows an loading state
        Given a user is viewing the coupon code component
        When the coupon code is loading in
        Then the text inside the input is "Loading..."
        And the coupon code input box has a gray background
        And the cursor is set to "default"
        And the user cannot copy the text

    @ui
    Scenario: user can edit the error message and code placeholder
        Given a user is editing the coupon code component
        When they see an option called "Invalid Email Message"
        And an option called "Required Field Message"

    @ui
    Scenario: user can edit the alignment of the coupon code text
        Given a user is editing the coupon code component
        When they change the option "Align text" to <option>
        Then they see the text in <position>
        Examples:
            | option | position |
            | left   | left     |
            | center | center   |

    @ui
    Scenario Outline: The position of the copy button can be changed
        Given a user is editing the coupon code component
        When they change the option "Button style" to <option>
        Then they see the copy button in <position>
        Examples:
            | option         | position                        |
            | button inside  | inside the input, on the right  |
            | button outside | outside the input, on the right |
            | button below   | outside the input, below        |

    @minutia
    Scenario: ICU string converts to a date

    @landmine
    Scenario: ICU string does not work with automatic translations
