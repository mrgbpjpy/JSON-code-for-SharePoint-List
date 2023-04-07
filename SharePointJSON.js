/*This is a JSON script for formatting a SharePoint column called "Ticket_x0020_Duration". The script sets the background color, border color, and font color for the column based on the age of the ticket.

If the ticket is less than 30 days old, the background color is set to a mint green color, the border color and font color are set to a darker shade of green. If the ticket is over 30 days old, the background color is set to a gold color, and the border color and font color are set to a darker shade of gold. If the ticket is over 60 days old, the background color is set to a peach color, and the border color and font color are set to a darker shade of peach. Finally, if the ticket is over 90 days old, the background color is set to a coral color, and the font color is set to white, while the background color of light gray is used for the border.

The "elmType" of the script is "div", which means it will create a div element for each cell in the "Ticket_x0020_Duration" column. The "txtContent" attribute is used to display the actual value of the column (i.e., the ticket duration) inside the div element. The "style" attribute sets the padding and overflow properties of the div element, while the "attributes" attribute sets the class attribute of the div element based on the ticket duration.*/


{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "style": {
    "box-sizing": "border-box",
    "padding": "0 2px",
    "overflow": "hidden",
    "text-overflow": "ellipsis"
  },
  "attributes": {
    "class": {
      "operator": ":",
      "operands": [
        {
          "operator": "==",
          "operands": [
            "[$Ticket_x0020_Duration]",
            "Ticket is less than 30 days old"
          ]
        },
        "sp-css-backgroundColor-BgMintGreen sp-css-borderColor-MintGreenFont sp-css-color-MintGreenFont",
        {
          "operator": ":",
          "operands": [
            {
              "operator": "==",
              "operands": [
                "[$Ticket_x0020_Duration]",
                "Ticket is over than 30 days old"
              ]
            },
            "sp-css-backgroundColor-BgGold sp-css-borderColor-GoldFont sp-css-color-GoldFont",
            {
              "operator": ":",
              "operands": [
                {
                  "operator": "==",
                  "operands": [
                    "[$Ticket_x0020_Duration]",
                    "Ticket is over 60 days old"
                  ]
                },
                "sp-css-backgroundColor-BgPeach sp-css-borderColor-PeachFont sp-css-color-PeachFont",
                {
                  "operator": ":",
                  "operands": [
                    {
                      "operator": "==",
                      "operands": [
                        "[$Ticket_x0020_Duration]",
                        "Ticket is over 90 days old"
                      ]
                    },
                    "sp-css-backgroundColor-BgCoral sp-css-color-CoralFont",
                    "sp-css-backgroundColor-BgLightGray sp-css-color-LightGrayFont"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "txtContent": "[$Ticket_x0020_Duration]"
}
