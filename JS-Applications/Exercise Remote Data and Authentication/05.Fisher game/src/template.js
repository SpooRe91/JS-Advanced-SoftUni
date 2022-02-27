export function catchTemplate({ angler, weight, species, location, bait, captureTime, _id, _ownerId }) {
    const wrapper = document.createElement('div')
    wrapper.className = 'catch'
    wrapper.id = _id


    let ownCatch = false
    if (sessionStorage.getItem("userId") == _ownerId) {
        ownCatch = true
    }

    wrapper.innerHTML = `<label>Angler</label>
<input ${!ownCatch ? 'disabled' : ''} type="text" class="angler" value=${angler} />
<hr>
<label>Weight</label>
<input ${!ownCatch ? 'disabled' : ''} type="number" class="weight" value=${weight} />
<hr>
<label>Species</label>
<input ${!ownCatch ? 'disabled' : ''} type="text" class="species" value=${species} />
<hr>
<label>Location</label>
<input ${!ownCatch ? 'disabled' : ''} type="text" class="location" value=${location} />
<hr>
<label>Bait</label>
<input ${!ownCatch ? 'disabled' : ''} type="text" class="bait" value=${bait} />
<hr>
<label>Capture Time</label>
<input ${!ownCatch ? 'disabled' : ''} type="number" class="captureTime" value=${captureTime} />
<hr>
<button ${!ownCatch ? 'disabled' : ''} class="update">Update</button>
<button ${!ownCatch ? 'disabled' : ''} class="delete">Delete</button>`

    return wrapper
}