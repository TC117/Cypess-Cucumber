Feature: Computer
   
  # Scenario: Verify user could create a new computer with all field
  #   When User access to laning page
  #   And User click add new computer
  #   And User enter computer name as "random123"
  #   And User enter computer introduced date as "2012-12-21"
  #   And User enter computer discontinued date as "2020-12-21"
  #   And User select company as "IBM"
  #   And User add new computer with above details
  #   Then Verify new computer added

  
  Scenario Outline: Verify user could create a new computer with all field + search + deleted
    When User access to laning page
    And User click add new computer
    And User enter computer name as "<ComputeName>"
    And User enter computer introduced date as "<IntroducedDate>"
    And User enter computer discontinued date as "<DiscontinuedDate>"
    And User select company as "<CompanyName>"
    And User add new computer with above details
    Then Verify new computer added
    When User deleted new computer just created
    Then Verify user deleted computer

  # TODO: get data from CSV file
  Examples:
      | ComputeName                 | IntroducedDate  | DiscontinuedDate  | CompanyName   |
      # | An other random computer    | 2012-12-12      | 2102-12-12        |	HTC Corporation         |
      | Other Randm Computer    | 2012-12-12      | 2102-12-12        |	random         |

  

