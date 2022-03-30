@owner:derek
@author:derek
Feature: Dropdown field

  Dropdown field to be used in our portal registration component. Motivating examples include, a dropdown of countries
  for users to select between during registration.

  Background: A user is on the portal registration page
    Given a user is viewing "/register"
    And "/register" contains the registration form
    And the registration form has checkbox field component

  @motivating
  Scenario: The dropdown field is required by default
    Given the user tries to register
    But they havent selected a dropdown option
    When they click "Register"
    Then they are not registered
    And they see the dropdown bordered in red
    And below they see the validation error "Select an option"

  @minutae
  Scenario: The dropdown field can be optional
    Given the dropdown has prop "dropdown-optional" with value "true"
    When the user tries to register
    And they havent selected a dropdown option
    Then they see no validation error
    And registration is not blocked

  @motivating
  Scenario Outline: Dropdown label is configurable
    Given the dropdown has prop "dropdown-label" with <propValue>
    When the user views the dropdown component
    Then the label is <label>
    Examples:
      | propValue       | label            |
      |                 | Select an option |
      | My Custom Label | My Custom Label  |

  @minutae
  Scenario Outline: Validation error message is configurable
    The error message string is evaluated as an ICU string, but currently is provided no context
    Given the dropdown is required
    And the dropdown has prop "error-message" with <propValue>
    When the user tries to register
    But they havent selected a dropdown option
    Then they see <errorMessage> below
    Examples:
      | propValue         | errorMessage          |
      |                   | Select an option |
      | My Custom Message | My Custom Message     |

  @motivating
  Scenario: Dropdown options are passed as child sl-menu-item components
    Given the register form has the following html
      """
      <sqm-portal-register>
      <sqm-dropdown-field
      slot="formData"
      dropdown-label="Select an option"
      dropdown-name="options"
      >
      <sl-menu-item value="option-1">Option 1</sl-menu-item>
      <sl-menu-item value="option-2">Option 2</sl-menu-item>
      <sl-menu-item value="option-3">Option 3</sl-menu-item>
      </sqm-dropdown-field>
      </sqm-portal-register>
      """
    When the user views the dropdown component
    And they click on the input
    Then the dropdown expands downwards
    And they see the three following options
      | options  |
      | Option 1 |
      | Option 2 |
      | Option 3 |
    When they select "Option 2"
    And they register
    Then the value "option-2" is submitted as the value for the "options" form field

  @motivating
  Scenario: The form field name attribute is configurable
    Given the dropdown has prop "dropdown-name" with value "myDropDown"
    When the user selects a drop down option
    And they register
    Then the value of their selected option is submitted under "myDropDown" field

  @minutae
  Scenario Outline: The dropdown field component fails fast if a dropdown name isn't provided
    Given the dropdown <mayHave> prop "dropdown-name"
    And it <mayHavePropValue>
    When a user views the dropdown
    Then an alert with an error message is displayed in place of the dropdown
    And it has a details section
    When "More details" is clicked
    Then the following information is displayed
      | information          |
      | component being used |
      | missing attribute(s) |
    Examples:
      | mayBeAnAttribute | mayHavePropValue |
      | doesn't have     | N/A              |
      | has              | ""               |
      | has              |                  |