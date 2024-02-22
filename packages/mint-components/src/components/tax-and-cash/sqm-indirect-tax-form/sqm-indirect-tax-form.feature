@owner:andy @author:andy
Feature: Indirect Tax Form

  Background: A user has submitted their personal information in Tax Form Step One
    Given a user is on the Indirect Tax Form

  @minutia @ui
  Scenario Outline: Participant selects Canada in step 1
    Given they select "Canada" as their country in step 1
    Then the "I am registered Indirect Tax" option is selected in step 2
    And the Country select is auto-selected with "Canada" from step 1
    And a Province select appears with the available <provinces>
    And based on the selected <province>
    Then <typeTaxInputs> will appear

    Examples: 
      | province              | typeTaxInput      |
      | Ontario               | HST Number        |
      | New Brunswick         | HST Number        |
      | Newfoundland          | HST Number        |
      | Nova Scotia           | HST Number        |
      | Saskatchewan          | HST Number        |
      | Prince Edward Island  | HST Number        |
      | Nunavut               | HST Number        |
      | British Columbia      | HST Number        |
      | Manitoba              | HST Number        |
      | Quebec                | GST + ?QST Number |
      | Yukon                 | GST Number        |
      | Alberta               | GST Number        |
      | Northwest Territories | GST Number        |

  @minutia @ui
  Scenario: QST Number input appears if the province is Quebec
    Given the participant selects "Canada" as their country in step 1
    And they Quebec select as their province
    Then a "GST Number" input will appear
    And a checkbox with "I am registered for QST Tax" will appear
    And if the participant checks the box
    Then a "QST Number" input will appear

  @minutia @ui
  Scenario Outline: Participant selects other country that has tax handling in step 1
    Given they select one of the following <countries> with <typeTax> in step 1:
      | countries      | typeTax |
      | UK             | VAT     |
      | Australia      | GST     |
      | New Zealand    | GST     |
      | Austria        | VAT     |
      | Belgium        | VAT     |
      | Bulgaria       | VAT     |
      | Croatia        | VAT     |
      | Cyprus         | VAT     |
      | Czech Republic | VAT     |
      | Denmark        | VAT     |
      | Estonia        | VAT     |
      | Finland        | VAT     |
      | France         | VAT     |
      | Germany        | VAT     |
      | Greece         | VAT     |
      | Hungary        | VAT     |
      | Ireland        | VAT     |
      | Italy          | VAT     |
      | Latvia         | VAT     |
      | Lithuania      | VAT     |
      | Luxembourg     | VAT     |
      | Malta          | VAT     |
      | Netherlands    | VAT     |
      | Poland         | VAT     |
      | Portugal       | VAT     |
      | Romania        | VAT     |
      | Slovakia       | VAT     |
      | Slovenia       | VAT     |
      | Spain          | VAT     |
      | Sweden         | VAT     |
      | Iceland        | VAT     |
      | India          | GST     |
      | Israel         | VAT     |
      | Japan          | CT      |
      | Mexico         | VAT     |
      | Norway         | VAT     |
      | Singapore      | GST     |
      | South Africa   | VAT     |
      | South Korea    | VAT     |
      | Switzerland    | VAT     |
      | Taiwan         | VAT     |
      | Thailand       | VAT     |
      | Philippines    | VAT     |
      | Malaysia       | GST     |
      | UAE            | VAT     |
      | Turkey         | VAT     |
      | Russia         | VAT     |
    Then the "I am registered Indirect Tax" option is selected in step 2
    And the Country select is auto-selected with their <country> from step 1
    And based on the <typeTax>
    Then <typeTaxInputHeader> changes

    Examples: 
      | country        | typeTax | typeTaxInputHeader |
      | United Kingdom | VAT     | VAT Number         |
      | Australia      | GST     | GST Number         |
      | Japan          | CT      | CT Number          |

  @minutia
  Scenario: Participant selects Spain as their country
    Given the participant selects Spain as their country in step 1
    Then a VAT Number input appears
    And a "Sub Region" select appears with available <subRegions>
    And a "I am registered for Income Tax" checkbox will appear
    And if the participant checks <isRegisteredIncomeTax>
    Then a "Income Tax Number" input will appear

    Examples: 
      | subRegions | isRegisteredIncomeTax |
      | Madrid     | true                  |
      | Barcelona  | false                 |
      | Valencia   | true                  |

  @minutia
  Scenario: Participant selects other country that is ineligible for indirect tax
    Given they select a country ineligible for indirect tax in step 1
    Then "I am not regisitered for Indirect Tax" is auto-selected
    And no inputs will appear

  @unknown @minutia
  Scenario Outline: Participant from another country can change the auto selected country
    When the Country <countryAutoSelectValue> is selected with their <country> from step 1
    And they change the Country to <newCountrySelectValue>
    Then the Country <countryAutoSelectValue> changes to the <newCountrySelectValue>

    Examples: 
      | country | countryAutoSelectValue | newCountrySelectValue |
      | US      | United States          | Australia             |
      | UK      | United Kingdom         | Egypt                 |
  # AL: Rough spec of what happen when the participant actually submits

  @TODO @minutia
  Scenario: Participant is registered for indirect tax fills out and submits form
    Given they are registered for indirect tax
    And they fill out the form
    And press "Continue"
    Then their indirect tax details are saved

  @minutia @ui
  Scenario: Participant fills out the Indirect Tax Form with invalid or empty values
    When they fill out the form with invalid or empty for the following fields:
      | Country               | <country             |
      | Province              | <province>           |
      | Sub-region            | <subRegion>          |
      | Indirect Tax Number   | <indirectTaxNumber>  |
      | QST Number            | <qstNumber>          |
      | Sub-Region Tax Number | <subRegionTaxNumber> |
    Then the form displays the respective errors for each field:
      | <country>           | Country is required                                                                                |
      | <province>          | Province is required                                                                               |
      | <subRegion          | Sub-region is required                                                                             |
      | <indirectTaxNumber> | "{taxType, select, GST {GST Number} HST {HST Number} VAT {VAT Number} CT {CT Number}} is required" |
      | <qstNumber>         | "QST Number is required"                                                                           |
      | <subRegionTaxNumber | "Income tax number is required                                                                     |

  @minutia
  Scenario: Participant decides to go back to step 1
    When they press the Back button
    Then the they are sent back to step 1
    And they arrive at the step 1 form filled with the information initially submitted
