CKEDITOR.plugins.add('simpleImageUpload', {
	init: function (editor) {
		var fileDialog = $('<input type="file" name="image" id="image" accept="image/jpeg, image/png, image/jpg,">')

		fileDialog.on('change', function (e) {
			loadingImage = 'data:image/gif;base64,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'
			var randomNumber = ''
			// tslint:disable-next-line: no-increment-decrement
			for (let i = 0; i < 16; i++) {
				randomNumber += Math.floor(Math.random() * 10)
			}
			var contentCreateUrl = editor.config.contentCreateUrl
			var fileUploadUrl = editor.config.fileUploadUrl
			var artifactUrl = editor.config.artifactUrl
			var fileRequestData = editor.config.fileRequestData
			var file = fileDialog[0].files[0]
			var fileToLoad = fileDialog[0].files[0]
			var imageData = new FormData()
			imageData.append('data', file)
			if (fileRequestData && fileRequestData.request) {
				fileRequestData['request']['content']['code'] = randomNumber
				fileRequestData['request']['content']['name'] = file.name
			}

			var newImage = editor.document.createElement('img')
			newImage.setAttribute('src', loadingImage)
			newImage.setAttribute('height', '64')
			newImage.setAttribute('width', '64')
			newImage.setAttribute('id', 'loader')
			editor.insertElement(newImage)

			// var fileReader = new FileReader()
			// var srcData
			// fileReader.onload = function (fileLoadedEvent) {
			// 	srcData = fileLoadedEvent.target.result // <--- data: base64
			// 	console.log('srcData', srcData)
			// 	var newImage = editor.document.createElement('img')
			// 	newImage.setAttribute('src', srcData)
			// 	newImage.setAttribute('height', '100')
			// 	newImage.setAttribute('width', '100')
			// 	editor.insertElement(newImage)
			// 	console.log('newImage', newImage)
			// }
			// fileReader.readAsDataURL(fileToLoad)
			// fileDialog.val('');
			fileDialog.val('');
			$.ajax({
				url: contentCreateUrl,
				type: 'POST',
				dataType: 'json',
				contentType: "application/json",
				data: JSON.stringify(fileRequestData)
			}).done(function (done) {
				if (done) {
					var identifier = done.result.identifier
					$.ajax({
						url: fileUploadUrl + identifier,
						type: 'POST',
						contentType: false,
						processData: false,
						data: imageData,
					}).done(function (imageResponse) {
						var ele = editor.document.createElement('img')
						var artifactUrlUpdated = ''
						if ((artifactUrl).includes('karmayogiqa.nic.in')) {
							artifactUrlUpdated = imageResponse.result.artifactUrl.replace("https://static.karmayogiprod.nic.in/igotqa", artifactUrl)
						} else if ((artifactUrl).includes('karmayogibm.nic.in')) {
							artifactUrlUpdated = imageResponse.result.artifactUrl.replace("https://static.karmayogiprod.nic.in/igotbm", artifactUrl)
						} else if ((artifactUrl).includes('igotkarmayogi.gov.in')) {
							artifactUrlUpdated = imageResponse.result.artifactUrl.replace("https://static.karmayogiprod.nic.in/igotprod", artifactUrl)
						} else if ((artifactUrl).includes('karmayogi.nic.in')) {
							artifactUrlUpdated = imageResponse.result.artifactUrl.replace("https://static.karmayogiprod.nic.in/igot", artifactUrl)
						}
						ele.setAttribute('src', artifactUrlUpdated)
						ele.setAttribute('height', '100')
						ele.setAttribute('width', '100')
						editor.insertElement(ele)
						editor.document.getById('loader').remove()
						fileDialog.val('');
					}).fail(function () {
						console.log('in error');
						fileDialog.val('');
					});
				}

			})

		})
		editor.ui.addButton('Image', {
			label: 'Insert Image',
			command: 'openDialog',
			toolbar: 'insert'
		})
		editor.addCommand('openDialog', {
			exec: function (editor) {
				fileDialog.click()
			}
		})
	}
})
