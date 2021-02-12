1 - registration
[
    {
        "adminid": "gokul",
        "password": 123456
    },
    {
        "adminid": "riyaz",
        "password": "pass123"
    }
]

2 - login

req.body = {
    "adminid": "gokul",
    "password": "incorrect"
}

register[0].adminid == req.body.adminid

riyaz === gokul