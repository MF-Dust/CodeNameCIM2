ServerEvents.recipes((event) => {
	global.mechanismGroup.forEach((material) => {
		event.custom({
			"type": "custommachinery:custom_machine",
			"machine": `${global.namespace}:flash_disk_writer`,
			"time": 400,
			"hidden": false,
			"requirements": [
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": `cmi:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": `cmi:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": `cmi:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": `cmi:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": "cmi:programmed_flash_drive",
					"amount": 1
				},
				{
					"type": "custommachinery:item",
					"mode": "output",
					"item": `cmi:${material}_mechanism_flash_drive`,
					"amount": 1
				},
				{
					"type": "custommachinery:energy",
					"mode": "input",
					"amount": 2000000
				}
			]
		})
	})

	// 精密和红石
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:flash_disk_writer`,
		"time": 400,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "vintageimprovements:redstone_module",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "vintageimprovements:redstone_module",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "vintageimprovements:redstone_module",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "vintageimprovements:redstone_module",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "cmi:programmed_flash_drive",
				"amount": 1
			},
			{
				"type": "custommachinery:item",
				"mode": "output",
				"item": "cmi:redstone_mechanism_flash_drive",
				"amount": 1
			},
			{
				"type": "custommachinery:energy",
				"mode": "input",
				"amount": 2000000
			}
		]
	})

	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:flash_disk_writer`,
		"time": 400,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "create:precision_mechanism",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "create:precision_mechanism",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "create:precision_mechanism",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "create:precision_mechanism",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "cmi:programmed_flash_drive",
				"amount": 1
			},
			{
				"type": "custommachinery:item",
				"mode": "output",
				"item": "cmi:precision_mechanism_flash_drive",
				"amount": 1
			},
			{
				"type": "custommachinery:energy",
				"mode": "input",
				"amount": 2000000
			}
		]
	})
})