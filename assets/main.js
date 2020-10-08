let D = document
			let mode = D.getElementById('mode')
			const invert = _ => {
					let sheet = D.createElement('style')
					sheet.id = 'inverted'
					sheet.innerHTML = `
					body {
						background-color: #eee;
						color: black;
					}
          nav img {
            filter: none;
          }
					a {
						color: #ff7600;
					}
					section {
						background-color: #dcdcdc;
					}
					i {
						color: navy !important;
					}
					`
					D.head.appendChild(sheet)
					localStorage.inverted = 'true'
    }
			if (localStorage.inverted) invert()
		mode.onclick = _ => {
			if (localStorage.inverted) {
				let sheet = D.getElementById('inverted')
				if (sheet) {
					sheet.parentNode.removeChild(sheet)
				}
				localStorage.removeItem('inverted')
			} else {
				invert()
			}
		}
