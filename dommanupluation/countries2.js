const countries = [
    {
        name: "Afghanistan",
        code: "AF",
        timezone: "Afghanistan Standard",
        utc: "UTC+04:30",
        mobileCode: "+93"
    },
    {
        name: "Albania",
        code: "AL",
        timezone: "Central European Standard",
        utc: "UTC+01:00",
        mobileCode: "+355"
    },
    {
        name: "Algeria",
        code: "DZ",
        timezone: "Central European Standard",
        utc: "UTC+01:00",
        mobileCode: "+213"
    },
    {
        name: "Andorra",
        code: "AD",
        timezone: "Central European Standard",
        utc: "UTC+01:00",
        mobileCode: "+376"
    },
    {
        name: "Angola",
        code: "AO",
        timezone: "West Africa Standard",
        utc: "UTC+01:00",
        mobileCode: "+244"
    },
    {
        name: "Argentina",
        code: "AR",
        timezone: "Argentina Time",
        utc: "UTC-03:00",
        mobileCode: "+54"
    },
    {
        name: "Australia",
        code: "AU",
        timezone: "Australian Eastern Standard",
        utc: "UTC+10:00",
        mobileCode: "+61"
    },
    {
        name: "Austria",
        code: "AT",
        timezone: "Central European Standard",
        utc: "UTC+01:00",
        mobileCode: "+43"
    },
    {
        name: "Azerbaijan",
        code: "AZ",
        timezone: "Azerbaijan Standard",
        utc: "UTC+04:00",
        mobileCode: "+994"
    },
    {
        name: "Bangladesh",
        code: "BD",
        timezone: "Bangladesh Standard",
        utc: "UTC+06:00",
        mobileCode: "+880"
    },
    {
        name: "Brazil",
        code: "BR",
        timezone: "Brasília Time",
        utc: "UTC-03:00",
        mobileCode: "+55"
    },
    {
        name: "Belarus",
        code: "BY",
        timezone: "Belarus Standard",
        utc: "UTC+03:00",
        mobileCode: "+375"
    },
    {
        name: "Belgium",
        code: "BE",
        timezone: "Central European Standard",
        utc: "UTC+01:00",
        mobileCode: "+32"
    },
    {
        name: "Belize",
        code: "BZ",
        timezone: "Central America Standard",
        utc: "UTC-06:00",
        mobileCode: "+501"
    },
    {
        name: "Bolivia",
        code: "BO",
        timezone: "Bolivia Standard",
        utc: "UTC-04:00",
        mobileCode: "+591"
    },
    {
        name: "Bosnia and Herzegovina",
        code: "BA",
        timezone: "Central European Standard",
        utc: "UTC+01:00",
        mobileCode: "+387"
    },
    {
        name: "Canada",
        code: "CA",
        timezone: "Multiple (e.g., Pacific, Eastern)",
        utc: "UTC-03:30 to UTC-08:00",
        mobileCode: "+1"
    },
    {
        name: "China",
        code: "CN",
        timezone: "China Standard",
        utc: "UTC+08:00",
        mobileCode: "+86"
    },
    {
        name: "Colombia",
        code: "CO",
        timezone: "Colombia Standard",
        utc: "UTC-05:00",
        mobileCode: "+57"
    },
    {
        name: "Costa Rica",
        code: "CR",
        timezone: "Central America Standard",
        utc: "UTC-06:00",
        mobileCode: "+506"
    },
    {
        name: "Croatia",
        code: "HR",
        timezone: "Central European Standard",
        utc: "UTC+01:00",
        mobileCode: "+385"
    },
    {
        name : "Democratic Republic of Congo",
        code: "CD",
        timezone: "Central Africa Standard",
        utc: "UTC+02:00",
        mobileCode: "+243"
    },
    {
        name: "Denmark",
        code: "DK",
        timezone: "Central European Standard",
        utc: "UTC+01:00",
        mobileCode: "+45"
    },
    {
        name : "Djibouti",
        code: "DC",
        timezone: "Central Africa Standard",
        utc: "UTC+02:00",
        mobileCode: "+253"
    },
    {
        name : "East Germany",
        code : "EG",
        timezone: "Egypt Standard",
        utc: "UTC+02:00",
        mobileCode: "+20"
    },
    {
        name: "Ecuador",
        code: "EC",
        timezone: "Ecuador Standard",
        utc: "UTC-05:00",
        mobileCode: "+593"
    },
    {
        name: "Egypt",
        code: "EG",
        timezone: "Egypt Standard",
        utc: "UTC+02:00",
        mobileCode: "+20"
    },
    {
        name: "El Salvador",
        code: "SV",
        timezone: "Central America Standard",
        utc: "UTC-06:00",
        mobileCode: "+503"
    },
    {
        name: "Finland",
        code: "FI",
        timezone: "Central European Standard",
        utc: "UTC+02:00",
        mobileCode: "+358"
    },
    {
        name: "France",
        code: "FR",
        timezone: "Central European Standard",
        utc: "UTC+01:00",
        mobileCode: "+33"
    },
    {
        name : "Gabon",
        code: "GA",
        timezone: "Africa Standard",
        utc: "UTC+01:00",
        mobileCode: "+241"
    },
    {
        name: "Georgia",
        code: "GE",
        timezone: "Georgia Standard",
        utc: "UTC+04:00",
        mobileCode: "+995"
    },
    {
        name: "Ghana",
        code: "GH",
        timezone: "Africa Standard",
        utc: "UTC+00:00",
        mobileCode: "+233"
    },
    {
        name: "Germany",
        code: "DE",
        timezone: "Central European Standard",
        utc: "UTC+01:00",
        mobileCode: "+49"
    },
    {
        name: "Greece",
        code: "GR",
        timezone: "Eastern European Standard",
        utc: "UTC+02:00",
        mobileCode: "+30"
    },
    {
        name: "Haiti",
        code: "HT",
        timezone: "Central America Standard",
        utc: "UTC-05:00",
        mobileCode: "+509"
    },
    {
        name: "Honduras",
        code: "HN",
        timezone: "Central America Standard",
        utc: "UTC-06:00",
        mobileCode: "+504"
    },
    {
        name: "Hungary",
        code: "HU",
        timezone: "Central European Standard",
        utc: "UTC+01:00",
        mobileCode: "+36"
    },
    
    {
        name: "Iceland",
        code: "IS",
        timezone: "Greenwich Mean Time",
        utc: "UTC+00:00",
        mobileCode: "+354"
    },
    {
        name: "India",
        code: "IN",
        timezone: "India Standard",
        utc: "UTC+05:30",
        mobileCode: "+91"
    },
    {
        name: "Japan",
        code: "JP",
        timezone: "Japan Standard",
        utc: "UTC+09:00",
        mobileCode: "+81"
    },
    {
        name: "United Kingdom",
        code: "GB",
        timezone: "Greenwich Mean Time",
        utc: "UTC+00:00",
        mobileCode: "+44"
    },
    {
        name: "United States",
        code: "US",
        timezone: "Multiple (e.g., Pacific, Eastern)",
        utc: "UTC-05:00 to UTC-10:00",
        mobileCode: "+1"
    }
];
