commandMap = new Map([
		['/help', 'Shows this help menu'], 
		['/balancetop', 'Shows the global top 10 users'],
		['/afk', 'Sets away from keyboard status'], 
		['/s', 'Spits on grave'], 
		['/ping', 'Pong!'], 
		['/balance', "Displays a user's burger balance"],
		['/pay', "Pays a certain amount of burgers to another user"],
		['/coinflip', 'Flip a coin and get (or lose) burgers!'], 
		['/dm', 'Sends DM to user'], 
		['/random', 'Generates a random number'], 
		['/post', 'Posts a message'], 
		['/rape', 'Rapes a user'],
		['/nigger', 'Calculates the niggerness of a user'],
		['/battle', 'Challenges another user to a battle'],
		['/burger', 'A burger a day keeps the doctor away!'],
		['/invite', 'Invite me to your server!'],
		['/flags', 'Starts a flag guessing game'],
		]);

flags = [
  {id: "AF", name: "Afghanistan"},
  {id: "AX", name: "Aland Islands"},
  {id: "AL", name: "Albania"},
  {id: "DZ", name: "Algeria"},
  {id: "AS", name: "American Samoa"},
  {id: "AD", name: "Andorra"},
  {id: "AO", name: "Angola"},
  {id: "AI", name: "Anguilla"},
  {id: "AQ", name: "Antarctica"},
  {id: "AG", name: "Antigua and Barbuda"},
  {id: "AR", name: "Argentina"},
  {id: "AM", name: "Armenia"},
  {id: "AW", name: "Aruba"},
  {id: "AU", name: "Australia"},
  {id: "AT", name: "Austria"},
  {id: "AZ", name: "Azerbaijan"},
 
  {id: "BS", name: "Bahamas"},
  {id: "BH", name: "Bahrain"},
  {id: "BD", name: "Bangladesh"},
  {id: "BB", name: "Barbades"},
  {id: "BY", name: "Belarus"},
  {id: "BE", name: "Belgium"},
  {id: "BZ", name: "Belize"},
  {id: "BJ", name: "Benin"},
  {id: "BM", name: "Bermuda"},
  {id: "BT", name: "Bhutan"},
  {id: "BO", name: "Bolivia"},
  {id: "BA", name: "Bosnia"},
  {id: "BW", name: "Botswana"},
  {id: "BV", name: "Bouvet Island"},
  {id: "BR", name: "Brazil"},
  {id: "VG", name: "British Virgin Islands"},
  {id: "IO", name: "British Indian Ocean Territory"},
  {id: "BN", name: "Brunei Darussalam"},
  {id: "BG", name: "Bulgaria"},
  {id: "BF", name: "Burkina Faso"},
  {id: "BI", name: "Burundi"},
  
  {id: "KH", name: "Cambodia"},
  {id: "CM", name: "Cameroon"},
  {id: "CA", name: "Canada"},
  {id: "CV", name: "Cape Verde"},
  {id: "KY", name: "Cayman Islands"},
  {id: "CF", name: "Central African Republic"},
  {id: "TD", name: "Chad"},
  {id: "CL", name: "Chile"},
  {id: "CN", name: "China"},
  {id: "HK", name: "Hong Kong"},
  {id: "MO", name: "Macau"},
  {id: "CX", name: "Christmas Island"},
  {id: "CC", name: "Cocos Keeling Islands"},
  {id: "CO", name: "Colombia"},
  {id: "KM", name: "Comoros"},
  {id: "CG", name: "Congo"},
  {id: "CD", name: "Democratic Republic of Congo"},
  {id: "CK", name: "Cook Islands"},
  {id: "CR", name: "Costa Rica"},
  {id: "CI", name: "Ivory Coast"},
  {id: "HR", name: "Croatia"},
  {id: "CU", name: "Cuba"},
  {id: "CY", name: "Cyprus"},
  {id: "CZ", name: "Czech Republic"},
  
  {id: "DK", name: "Denmark"},
  {id: "DJ", name: "Djibouti"},
  {id: "DM", name: "Dominica"},
  {id: "DO", name: "Dominican Republic"},
  
  {id: "EC", name: "Ecuador"},
  {id: "EG", name: "Egypt"},
  {id: "SV", name: "El Salvador"},
  {id: "GQ", name: "Equatorial Guinea"},
  {id: "ER", name: "Eritrea"},
  {id: "EE", name: "Estonia"},
  {id: "ET", name: "Ethiopia"},
  
  {id: "FK", name: "Falkland Islands"},
  {id: "FO", name: "Faroe Islands"},
  {id: "FJ", name: "Fiji"},
  {id: "FI", name: "Finland"},
  {id: "FR", name: "France"},
  {id: "GF", name: "French Guiana"},
  {id: "PF", name: "French Polynesia"},
  {id: "TF", name: "French Southern Territories"},
  
  {id: "GA", name: "Gabon"},
  {id: "GM", name: "Gambia"},
  {id: "GE", name: "Georgia"},
  {id: "DE", name: "Germany"},
  {id: "GH", name: "Ghana"},
  {id: "GI", name: "Gibraltar"},
  {id: "GR", name: "Greece"},
  {id: "GL", name: "Greenland"},
  {id: "GD", name: "Grenada"},
  {id: "GP", name: "Guadeloupe"},
  {id: "GU", name: "Guam"},
  {id: "GT", name: "Guatemala"},
  {id: "GG", name: "Guernsey"},
  {id: "GN", name: "Guinea"},
  {id: "GW", name: "Guinea Bissau"},
  {id: "GY", name: "Guyana"},
  
  {id: "HT", name: "Haiti"},
  {id: "HM", name: "Heard Island and McDonald Island"},
  {id: "VA", name: "Vatican City"},
  {id: "HN", name: "Honduras"},
  {id: "HU", name: "Hungary"},
  
  {id: "IS", name: "Iceland"},
  {id: "IN", name: "India"},
  {id: "ID", name: "Indonesia"},
  {id: "IR", name: "Iran"},
  {id: "IQ", name: "Iraq"},
  {id: "IE", name: "Ireland"},
  {id: "IM", name: "Isle of Man"},
  {id: "IL", name: "Israel"},
  {id: "IT", name: "Italy"},
  
  {id: "JM", name: "Jamaica"},
  {id: "JP", name: "Japan"},
  {id: "JE", name: "Jersey"},
  {id: "JO", name: "Jordan"},
  
  {id: "KZ", name: "Kazahkstan"},
  {id: "KE", name: "Kenya"},
  {id: "KI", name: "Kiribati"},
  {id: "KP", name: "North Korea"},
  {id: "KR", name: "South Korea"},
  {id: "KW", name: "Kuwait"},
  {id: "KG", name: "Kyrgyzstan"},
  
  {id: "LA", name: "Laos"},
  {id: "LV", name: "Latvia"},
  {id: "LB", name: "Lebanon"},
  {id: "LS", name: "Lesotho"},
  {id: "LR", name: "Liberia"},
  {id: "LY", name: "Libya"},
  {id: "LI", name: "Liechtenstein"},
  {id: "LT", name: "Lithuania"},
  {id: "LU", name: "Luxembourg"},
  
  {id: "MK", name: "Macedonia"},
  {id: "MG", name: "Madagascar"},
  {id: "MW", name: "Malawi"},
  {id: "MY", name: "Malaysia"},
  {id: "MV", name: "Maldives"},
  {id: "ML", name: "Mali"},
  {id: "MT", name: "Malta"},
  {id: "MH", name: "Marshall Islands"},
  {id: "MQ", name: "Martinique"},
  {id: "MR", name: "Mauritania"},
  {id: "MU", name: "Mauritius"},
  {id: "YT", name: "Mayotte"},
  {id: "MX", name: "Mexico"},
  {id: "FM", name: "Micronesia"},
  {id: "MD", name: "Moldova"},
  {id: "MC", name: "Monaco"},
  {id: "MN", name: "Mongolia"},
  {id: "ME", name: "Montenegro"},
  {id: "MS", name: "Montserrat"},
  {id: "MA", name: "Morocco"},
  {id: "MZ", name: "Mozambique"},
  {id: "MM", name: "Myanmar"},
  
  {id: "NA", name: "Namibia"},
  {id: "NR", name: "Nauru"},
  {id: "NP", name: "Nepal"},
  {id: "NL", name: "Netherlands"},
  {id: "AN", name: "Netherlands Antilles"},
  {id: "NC", name: "New Caledonia"},
  {id: "NZ", name: "New Zealand"},
  {id: "NI", name: "Nicaragua"},
  {id: "NE", name: "Niger"},
  {id: "NG", name: "Nigeria"},
  {id: "NU", name: "Niue"},
  {id: "NF", name: "Norfolk Island"},
  {id: "MP", name: "Northern Mariana Islands"},
  {id: "NO", name: "Norway"},
  
  {id: "OM", name: "Oman"},
  
  {id: "PK", name: "Pakistan"},
  {id: "PW", name: "Palau"},
  {id: "PS", name: "Palestine"},
  {id: "PA", name: "Panama"},
  {id: "PG", name: "Papua New Guinea"},
  {id: "PY", name: "Paraguay"},
  
  {id: "PE", name: "Peru"},
  {id: "PH", name: "Philippines"},
  {id: "PN", name: "Pitcairn Islands"},
  {id: "PL", name: "Poland"},
  {id: "PT", name: "Portugal"},
  {id: "PR", name: "Puerto Rico"},
  
  {id: "QA", name: "Qatar"},
  
  {id: "RE", name: "Reunion"},
  {id: "RO", name: "Romania"},
  {id: "RU", name: "Russia"},
  {id: "RW", name: "Rwanda"},
  
  {id: "BL", name: "Saint Barthelemy"},
  {id: "SH", name: "Saint Helena"},
  {id: "KN", name: "Saint Kitts and Nevis"},
  {id: "LC", name: "Saint Lucia"},
  {id: "MF", name: "Saint Martin"},
  {id: "PM", name: "Saint Pierre and Miquelon"},
  {id: "VC", name: "Saint Vincent and the Grenadines"},
  {id: "WS", name: "Samoa"},
  {id: "SM", name: "San Marino"},
  {id: "ST", name: "Sao Tome and Principe"},
  {id: "SA", name: "Saudi Arabia"},
  {id: "SN", name: "Senegal"},
  {id: "RS", name: "Serbia"},
  {id: "SC", name: "Seychelles"},
  {id: "SL", name: "Sierra Leone"},
  {id: "SG", name: "Singapore"},
  {id: "SK", name: "Slovakia"},
  {id: "SI", name: "Slovenia"},
  {id: "SB", name: "Solomon Islands"},
  {id: "SO", name: "Somalia"},
  {id: "ZA", name: "South Africa"},
  {id: "GS", name: "South Georgia and the South Sandwich Islands"},
  {id: "SS", name: "South Sudan"},
  {id: "ES", name: "Spain"},
  {id: "LK", name: "Sri Lanka"},
  {id: "SD", name: "Sudan"},
  {id: "SR", name: "Suriname"},
  {id: "SJ", name: "Svalbard and Jan Mayen"},
  {id: "SZ", name: "Swaziland"},
  {id: "SE", name: "Sweden"},
  {id: "CH", name: "Switzerland"},
  {id: "SY", name: "Syria"},
  
  {id: "TW", name: "Taiwan"},
  {id: "TJ", name: "Tajikistan"},
  {id: "TZ", name: "Tanzania"},
  {id: "TH", name: "Thailand"},
  {id: "TL", name: "Timor Leste"},
  {id: "TG", name: "Togo"},
  {id: "TK", name: "Tokelau"},

  {id: "TO", name: "Tonga"},
  {id: "TT", name: "Trinidad and Tobago"},
  {id: "TN", name: "Tunisia"},
  {id: "TR", name: "Turkey"},
  {id: "TM", name: "Turkmenistan"},
  {id: "TC", name: "Turks and Caicos Islands"},
  {id: "TV", name: "Tuvalu"},
  
  {id: "UG", name: "Uganda"},
  {id: "UA", name: "Ukraine"},
  {id: "AE", name: "United Arab Emirates"},
  {id: "GB", name: "United Kingdom"},
  {id: "US", name: "United States of America"},
  {id: "UM", name: "US Minor Outlying Islands"},
  {id: "UY", name: "Uruguay"},
  {id: "UZ", name: "Uzbekistan"},
  
  {id: "VU", name: "Vanuatu"},
  {id: "VE", name: "Venezuela"},
  {id: "VN", name: "Vietnam"},
  {id: "VI", name: "US Virgin Islands"},
  
  {id: "WF", name: "Wallis and Futuna"},
  {id: "EH", name: "Western Sahara"},
  
  {id: "YE", name: "Yemen"},
  
  {id: "ZM", name: "Zambia"},
  {id: "ZW", name: "Zimbabwe"}];

burger = [
  "https://i.gifer.com/Qlsi.gif", 
  "https://media.giphy.com/media/EmSCxtcjQCmXK/giphy.gif", 
  "https://gif-free.com/uploads/posts/2018-01/1517419327_anime-girl-eating-burger.gif", 
  "https://i.gifer.com/nwL.gif", 
  "https://i.gifer.com/ElSx.gif", 
  "https://img.fireden.net/a/image/1486/57/1486574417193.gif",
  "https://cdn.discordapp.com/attachments/458082060607684608/478966167906549763/image.gif",
  "https://i.warosu.org/data/jp/img/0124/38/1409634459946.gif",
  "https://i.gifer.com/5MQq.gif"];

rape = [
  "https://img.4plebs.org/boards/sp/image/1405/27/1405279865972.gif", 
  "https://media1.tenor.com/images/dc7284a153bbc22dd2ddda022957e2be/tenor.gif", 
  "https://i.pinimg.com/originals/ce/41/9c/ce419c7a3723967df36b4a3c7ddfc8ac.gif", 
  "https://i.pinimg.com/originals/9c/11/f6/9c11f69bdf4517a6226f57875b163c20.gif", 
  "https://media.giphy.com/media/TxBXGd0h4kVS8/giphy.gif"];

help = "```/afk - Sets away from keyboard status\n/battle - Challenges another user to a battle!\n/burger - A burger a day keeps the doctor away!\n/coinflip - Flips a coin\n/dm - Sends DM to a user\n/flags - Starts a flag guessing game\n/help - Shows this help screen\n/invite - Invite me to your server!\n/nigger - Calculates a user's niggerness\n/ping - Pong\n/post - Posts a message\n/random - Generates a random number\n/rape - Rapes a user\n/s - Spits on grave```";

module.exports = {flags, burger, rape, help, commandMap};
