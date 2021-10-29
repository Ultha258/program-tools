@owner:sam
@author:sam

Feature: Widget

    sqb-widget provides the ability to load and render global and program widget.
    The motivating use case is to load these widgets within our hosted portals.

    Background: A user and a program widget exists
        Given a user with id "bobtesterson@example.com"
        And accountId "bobtesterson@example.com"
        And a referral program with id "referral-a"
        And the program has a referrer widget
        And a global widget with key "global-widget"

    @motivating
    Scenario Outline: Program and global widgets can be loaded
        Given a sqb-widget component with "widget-type" <widget>
        When the compontent is loaded on a page
        Then <widget> is rendered
        Examples:
            | widget                        |
            | p/referral-a/w/referrerWidget |
            | global-widget                 |

    @motivating
    Scenario Outline: Widget load events can be tracked in SSQT when a widget is loaded
        Given a sqb-widget with "widget-type" "p/referral-a/w/referrerWidget"
        And it <mayHaveTrackLoads> prop with <value>
        When the widget is rendered
        Then the referrer widget from "program-a" is displayed
        And a widget load event <mayOccur>
        And it <mayHave> the following request body
            """
            eventMeta: {
            accountId: "bobtesterson@example.com",
            id: "bobtesterson@example.com",
            meta: {engagementMedium: "EMBED"},
            programId: "program-a",
            type: "USER_REFERRAL_PROGRAM_LOADED_EVENT"
            }
            """
        Examples:
            | mayHaveTrackLoads        | value | mayOccur      | mayHave |
            | has track-loads          | true  | occurs        | has     |
            | has track-loads          | false | doesn't occur | N/A     |
            | doesn't have track-loads |       | doesn't occur | N/A     |

    @motivating
    Scenario Outline: The engagement medium of load events can be configured but defaults to `EMBED`
        Given a sqb-widget with "widget-type" "p/referral-a/w/referrerWidget"
        And it tracks loads
        And it <mayHaveEngagementMedium> prop with <value>
        When the widget is rendered
        And the load event is sent to SSQT
        Then it will have <engagementMedium>
        Examples:
            | mayHaveEngagementMedium       | value      | engagementMedium |
            | has engagementMedium          | NOCONTENT  | NOCONTENT        |
            | has engagementMedium          | EMBED      | EMBED            |
            | has engagementMedium          | HOSTED     | HOSTED           |
            | has engagementMedium          | MOBILE     | MOBILE           |
            | has engagementMedium          | POPUP      | POPUP            |
            | has engagementMedium          | DEMO_EMBED | DEMO_EMBED       |
            | has engagementMedium          | DEMO       | DEMO             |
            | has engagementMedium          | EMPTY      | EMPTY            |
            | has engagementMedium          | EMAIL      | EMAIL            |
            | has engagementMedium          | UNKNOWN    | UNKNOWN          |
            | doesn't have engagementMedium |            | EMBED            |
