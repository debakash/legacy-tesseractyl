const fetch = require('node-fetch');

module.exports={

    listUser: function(application){
        
        fetch(`${application.panelURL}/api/application/users`, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${application.apiKey}`,
                'Content-Type': 'application/json',
                'Accept': 'Application/vnd.pterodactyl.v1+json'
            },
        })
        .then(res => res.json())
        .then(json => console.log(json))
        return; 
    },

    listNodes: function(application){

        fetch(`${application.panelURL}/api/application/nodes`, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${application.apiKey}`,
                'Content-Type': 'application/json',
                'Accept': 'Application/vnd.pterodactyl.v1+json'
            },
        })
        .then(res => res.json())
        .then(json => console.log(json))
        return; 
    },
    

}