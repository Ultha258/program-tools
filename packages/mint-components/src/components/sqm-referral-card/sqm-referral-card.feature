@author:kutay
@owner:kutay
Feature: Referral Card

	The Referral Card component takes in two slots and displays them side by side.

	Background: A user on the portal is viewing the widget
		Given a user viewing the Referral Card component

	@motivating
	Scenario: Referral Card component displays provided content in left and right slots side by side
		Given a Referral Card component
		And a slot with the name "left"
		And a slot with the name "right"
		Then slots contents are displayed inside the card
		When the component is scaled down to 499px
		Then the column layout switches to row layout

	@motivating
	Scenario Outline: Referral Card component content can be vertically aligned start, center, end
		Given a Referral Card component
		And a slot with the name "left"
		And a slot with the name "right"
		And prop "vertical-alignment" has <value>
		Then slots contents are displayed inside the card
		And slots are vertically aligned to <value>

		Examples:
			| value  |
			| start  |
			| center |
			| end    |


	@motivating
	Scenario Outline: Referral Card component content outer padding can be customized
		Given a Referral Card component
		And a slot with the name "left"
		And a slot with the name "right"
		And prop "padding" has <value>
		Then slots contents are displayed inside the card
		And <padding> is applied to each slot
		But neighbouring sides of each slot have a predefined padding of "medium"

		Examples:
			| value      | padding    |
			| none       | no padding |
			| xxx-small  | xxx-small  |
			| xx-small   | xx-small   |
			| x-small    | x-small    |
			| small      | small      |
			| medium     | medium     |
			| large      | large      |
			| x-large    | x-large    |
			| xx-large   | xx-large   |
			| xxx-large  | xxx-large  |
			| xxxx-large | xxxx-large |
			| N/A        | no padding |


