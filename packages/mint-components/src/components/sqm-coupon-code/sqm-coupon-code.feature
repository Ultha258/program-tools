@author:johan
@owner:johan
Feature: Coupon Code

    The coupon code component is a box that allows users to see and copy their coupon code for a given program

    Background: Environment
        Given there is a valid program ID in the environment
        And there is a valid user ID and account ID in the environment

    @motivating
    Scenario: A Users sharelink can be copied to their clipboard
        Given tooltipText is "hello tooltip"
        When the component renders
        Then there is a textbox with the user's coupon code
        When the clipboard icon is clicked
        Then the link is copied to clipboard
        And a tooltip appears for ~1 second

    @minutia
    Scenario: Tooltip lifespan defaults to 2000
        Given the tooltip's lifespan is set to 2000
        And there is tooltip text
        When the component renders
        And the clipboard icon is clicked
        Then a tooltip appears for ~2 seconds

    @minutia
    Scenario: Demo
        Given isDemo() returns true
        Then the coupon code is "https://www.example.com/sharelink/abc"
        And the component won't be interactive
        And the tooltip is hidden

    @minutia
    Scenario: Program ID can be sourced from prop
        Given the programId prop is set to "program-a"
        And window.widgetIdent.programId is set to "program-b"
        When the component renders
        Then the coupon code is for "program-a"

    @minutia
    Scenario: Program ID can be sourced from window
        Given the programId prop is unset
        And window.widgetIdent.programId is set to "program-b"
        When the component renders
        Then the coupon code is for "program-b"

    @minutia
    Scenario: An analytic event is fired when a user copies their sharelink
        Given a user viewing the coupon code component
        And the component is rendered for "program-a"
        When they click to copy their link
        Then an "USER_REFERRAL_PROGRAM_ENGAGEMENT_EVENT" analytic event is fired
        And it is for "program-a"
        And it has share medium "DIRECT"
