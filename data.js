var APP_DATA = {
  "scenes": [
    {
      "id": "0-corridor-1",
      "name": "Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.30422504893939,
        "pitch": 0.07947449646254867,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 3.1066868184477396,
          "pitch": 0.1260656376277982,
          "rotation": 0,
          "target": "1-room-1"
        },
        {
          "yaw": -2.1432081884397025,
          "pitch": 0.09130516924813037,
          "rotation": 0,
          "target": "2-room-2"
        },
        {
          "yaw": -2.4003336521036243,
          "pitch": 0.09448430000012209,
          "rotation": 0,
          "target": "3-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-room-1",
      "name": "Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.00035622527607870325,
        "pitch": 0.06767694307927741,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.253092719131782,
          "pitch": 0.08225494243072617,
          "rotation": 0,
          "target": "0-corridor-1"
        },
        {
          "yaw": 2.1793826692804554,
          "pitch": 0.10127279065503636,
          "rotation": 0,
          "target": "3-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-room-2",
      "name": "Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.4142078253926602,
        "pitch": 0.053330986315133444,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.3150139629972983,
          "pitch": 0.17805022179558705,
          "rotation": 0,
          "target": "0-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corridor-2",
      "name": "Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.18578603982952124,
        "pitch": 0.07213321341411039,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.344423285132894,
          "pitch": 0.1105014123915069,
          "rotation": 0,
          "target": "1-room-1"
        },
        {
          "yaw": -3.1015563492024736,
          "pitch": 0.08653674509454312,
          "rotation": 0,
          "target": "0-corridor-1"
        },
        {
          "yaw": -0.6674291856725763,
          "pitch": 0.16712185132292134,
          "rotation": 0,
          "target": "6-room-3"
        },
        {
          "yaw": -0.14759699850092467,
          "pitch": 0.1143474369611539,
          "rotation": 0,
          "target": "4-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-corridor-3",
      "name": "Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.930284121640602,
        "pitch": 0.039856189358065564,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.88799492895342,
          "pitch": 0.09301698861605523,
          "rotation": 0,
          "target": "5-corridor-4"
        },
        {
          "yaw": 2.343391189414561,
          "pitch": 0.11522014944245385,
          "rotation": 0,
          "target": "6-room-3"
        },
        {
          "yaw": -0.26656386537601406,
          "pitch": 0.15368331267516666,
          "rotation": 0,
          "target": "3-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corridor-4",
      "name": "Corridor 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.30421626137045,
        "pitch": 0.16048570450685773,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.3739875591380404,
          "pitch": 0.2337974590088958,
          "rotation": 0,
          "target": "6-room-3"
        },
        {
          "yaw": -0.9827586871892642,
          "pitch": 0.14547681699884585,
          "rotation": 0,
          "target": "4-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-room-3",
      "name": "Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.068175190605416,
        "pitch": -0.016760759898581057,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.021649955162032,
          "pitch": 0.08494129668968498,
          "rotation": 0,
          "target": "7-extension"
        },
        {
          "yaw": -0.07883129167768388,
          "pitch": 0.18910506449622844,
          "rotation": 0,
          "target": "4-corridor-3"
        },
        {
          "yaw": 0.39895621608345344,
          "pitch": 0.1287140760181611,
          "rotation": 0,
          "target": "3-corridor-2"
        },
        {
          "yaw": -2.3651117189304465,
          "pitch": 0.05432210426722861,
          "rotation": 0,
          "target": "5-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-extension",
      "name": "Extension",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.23733849023117592,
        "pitch": -0.02569166419734259,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -3.1337221949394873,
          "pitch": 0.04259850694960576,
          "rotation": 0,
          "target": "6-room-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "NEECH Ground Floor 10/09/2021",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
