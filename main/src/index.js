const fetch = require('node-fetch');

module.exports = {
    // Users//
    listUser: function(application) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
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

    getUser: function(application, userId) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
        fetch(`${application.panelURL}/api/application/users/${userId}`, {
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

    getUserExternal: function(application, externalUserId) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
        fetch(`${application.panelURL}/api/application/users/external/${externalUserId}`, {
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

    createUser: function(application, username, email, first_name, last_name, password, root_admin, language) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
        let body = {
            "username": username,
            "email": email,
            "first_name": first_name,
            "last_name": last_name,
            "password": password,
            "root_admin": root_admin,
            "language": language
        }

        fetch(`${application.panelURL}/api/application/users/external/`, {
                body: JSON.stringify(body),
                method: 'POST',
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

    editUser: function(application, username, email, first_name, last_name, password, root_admin, language) {
        // https://pterodactyl.app/api/application/users/<user-id>
        if (!application) throw new TypeError('Your login credentials are not specified!')
        let body = {
            "username": username,
            "email": email,
            "first_name": first_name,
            "last_name": last_name,
            "password": password,
            "root_admin": root_admin,
            "language": language
        }

        fetch(`${application.panelURL}/api/application/users/external/`, {
                body: JSON.stringify(body),
                method: 'PATCH',
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

    deleteUser: function(application, userId) {
        if (!application) throw new TypeError('Your login credentials are not specified!')

        fetch(`${application.panelURL}/api/application/users/${userId}`, {
                method: 'DELETE',
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
    // Users //

    // Node //
    listNodes: function(application) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
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

    getNode: function(application, nodeId) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
        if (!nodeId) throw new TypeError('You have not specified your nodeId')
        fetch(`${application.panelURL}/api/application/nodes/${nodeId}`, {
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

    createNode: function(application, nodeName, locationId, public, fqdn, scheme, behindProxy, memory, memoryOverallocation, disk, diskOverallocation) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
        if (!nodeName) throw new TypeError('You have not specified the nodeName')
        if (!locationId) throw new TypeError('You have not specified your locationId')
        if (!public) throw new TypeError('You have not specified if the node is public (true or false)')
        if (!fqdn) throw new TypeError('You have not specified the fqdn')
        if (!scheme) throw new TypeError('You have not specified the scheme. (HTTPS)')
        if (!behindProxy) throw new TypeError('You have not specified if it is behind a proxy')
        if (!memory) throw new TypeError('You have not specified the ram on the node.')
        if (!memoryOverallocation) throw new TypeError('You have not specified the ram overallocation on the node.')
        if (!disk) throw new TypeError('You have not specified how large the disk is on this node.')
        if (!diskOverallocation) throw new TypeError('You have not specified the disk overallocation on this node.')

        let body = {
            "name": nodeName,
            "description": "",
            "location_id": locationId,
            "public": public,
            "fqdn": fqdn,
            "scheme": scheme,
            "behind_proxy": behindProxy,
            "memory": memory,
            "memory_overallocate": memoryOverallocation,
            "disk": disk,
            "disk_overallocate": diskOverallocation,
            "daemon_base": "/srv/daemon-data",
            "daemon_listen": "8080",
            "daemon_sftp": "2022",
            "maintenance_mode": false,
            "upload_size": 100,
        }

        fetch(`${application.panelURL}/api/application/nodes/`, {
                method: 'POST',
                body: JSON.stringify(body),
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

    editNode: function(application, nodeName, locationId, public, fqdn, scheme, behindProxy, memory, memoryOverallocation, disk, diskOverallocation) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
        if (!nodeName) throw new TypeError('You have not specified the nodeName')
        if (!locationId) throw new TypeError('You have not specified your locationId')
        if (!public) throw new TypeError('You have not specified if the node is public (true or false)')
        if (!fqdn) throw new TypeError('You have not specified the fqdn')
        if (!scheme) throw new TypeError('You have not specified the scheme. (HTTPS)')
        if (!behindProxy) throw new TypeError('You have not specified if it is behind a proxy')
        if (!memory) throw new TypeError('You have not specified the ram on the node.')
        if (!memoryOverallocation) throw new TypeError('You have not specified the ram overallocation on the node.')
        if (!disk) throw new TypeError('You have not specified how large the disk is on this node.')
        if (!diskOverallocation) throw new TypeError('You have not specified the disk overallocation on this node.')

        let body = {
            "name": nodeName,
            "description": "",
            "location_id": locationId,
            "public": public,
            "fqdn": fqdn,
            "scheme": scheme,
            "behind_proxy": behindProxy,
            "memory": memory,
            "memory_overallocate": memoryOverallocation,
            "disk": disk,
            "disk_overallocate": diskOverallocation,
            "daemon_base": "/srv/daemon-data",
            "daemon_listen": "8080",
            "daemon_sftp": "2022",
            "maintenance_mode": false,
            "upload_size": 100,
        }

        fetch(`${application.panelURL}/api/application/nodes/`, {
                method: 'PATCH',
                body: JSON.stringify(body),
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

    deleteNode: function(application, nodeId) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
        fetch(`${application.panelURL}/api/application/nodes/${nodeId}`, {
                method: 'DELETE',
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

    listNodeAllocation: function(application, nodeId) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
        fetch(`${application.panelURL}/api/application/nodes/${nodeId}/allocations`, {
                method: 'GET',
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

    createAllocation: function(application, nodeId, ip, alias, ports) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
        let body = {
            "ip": ip,
            "alias": alias,
            "ports": ports
        }
        fetch(`${application.panelURL}/api/application/nodes/${nodeId}/allocations`, {
                body: JSON.stringify(body),
                method: 'POST',
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

    deleteAllocation: function(application, nodeId, allocationId) {
        if (!application) throw new TypeError('Your login credentials are not specified!')
        fetch(`${application.panelURL}/api/application/nodes/${nodeId}/allocations/${allocationId}`, {
                method: 'DELETE',
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
    // Nodes // 

    // Locations //
    listLocations: function(application){

    },

    getLocation: function(application){

    },

    editLocation: function(application){

    },

    deleteLocation: function(application){

    },
    // Locations // 
    
}