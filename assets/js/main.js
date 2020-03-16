var studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];


studentData.forEach(elt => console.log(elt))
studentData.map(elt => console.log(elt))

studentData.forEach(elt => console.log(elt.address))
studentData.map(elt => console.log(elt.address))

studentData.forEach(elt => console.log(elt.age))
studentData.map(elt => console.log(elt.age))

studentData.forEach(elt => document.write(`${elt.name} <br>`))
studentData.forEach(elt => document.write(`${elt.coop} <br>`))
studentData.forEach(elt => document.write(`${elt.address.city} <br>`))
studentData.forEach(elt => document.write(`${elt.emails.join(", ")} <br>`))