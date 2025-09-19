function initTrees(classname) {
    build = JSON.parse(JSON.stringify(this[classname]));
    let container = document.getElementById('container');
    container.innerHTML = "";

    document.getElementById(selectedClass).classList.remove('selected');
    selectedClass = classname;
    document.getElementById(selectedClass).classList.add('selected');

    Object.keys(build).forEach((key) => {
        let tree = build[key];
        container.innerHTML+= "<div class='specbox' id='"+key+"'>" +
        '<span class="specheader '+classname+'">'+ key.toUpperCase() +' (0)</span>' +
        '<div id="'+key+'_tree" class="spectree '+classname+'" style="background-image: url(images/'+ tree.image +'); background-size: cover;">' +
        (tree.talents.length === 0 ? '<h1>COMING SOON</h1>' : '') +
        '</div>' +
        '</div>';
    
        let keytree = document.getElementById(key+'_tree');
        for (let i = 0; i < 9; i++) {
            keytree.innerHTML += '<div class="specrow" id="'+key+'_row_'+i+'"></div>';

            const row = document.getElementById(key+'_row_'+i);
            let filteredTalents = build[key].talents.filter((item) => item.row == i);
            for (let j=0;j<4;j++) {
                if (!filteredTalents.find(item => item.col == j)) {
                    row.innerHTML+= '<span style="width: 59px;"></span>';
                } else {
                    const talent = filteredTalents.find((item) => item.col == j);

                    let description = talent.description;

                    if (Object.keys(talent.values).length > 0) {
                        Object.keys(talent.values).forEach((key) => {
                            const value = talent.values[key];
                            description = description.replace(key, (talent.current == 0 ? value : (value * talent.current)));
                        })
                    }

                    row.innerHTML+= 
                    '<div class="talentbox" id="'+key+'_'+talent.id+'" onclick="putPoint(event)" oncontextmenu="removePoint(event)" popovertarget="tooltip_'+key+'_'+talent.id+'">' + 
                    '<img style="width: 55px" src="images/'+talent.image+'" class="talent '+classname+'"/>' + 
                    '<span class="talentcounter">'+talent.current+'/'+talent.max+'</span>' +
                    '<div popover="auto" id="tooltip_'+key+'_'+talent.id+'" class="tooltip '+classname+'">'+
                        '<h3>'+talent.name+'</h3>'+
                        '<p>' + description + '</p>'+
                    '</div>' +
                    '</div>';
                }
            }
        }

        let boxes = document.querySelectorAll(".talentbox");
        let tooltips = document.querySelectorAll(".tooltip");
        
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener("mouseover", () => {
                popup(tooltips[i]);
                tooltips[i].showPopover({ source: boxes[i] });
            });
            boxes[i].addEventListener("mouseleave", () => {
                tooltips[i].hidePopover();
            });
        }
    });
}

function popup(tooltip) {
    let idsplit = tooltip.id.split('_');
    
    const talent = build[idsplit[1]].talents.find((item) => item.id == idsplit[2]);
    let currentDescription = talent.description;
    let nextDescription = talent.description;

    Object.keys(talent.values).forEach((key) => {
        const value = talent.values[key];
        currentDescription = currentDescription.replace(key, (talent.current == 0 ? value : (value * talent.current)));
        nextDescription = nextDescription.replace(key, (talent.current == 0 ? value : (value * (talent.current+1))));
    });

    tooltip.innerHTML = '<div class="popupheader"><h3>'+talent.name+'</h3>'+
    (talent.hasOwnProperty('type') && talent.type === "ability" ? '<h4>Ability</h4>' : '')
    +'</div>';

    if (talent.current > 0) {
        tooltip.innerHTML += '<p><b>Currently: </b>' + currentDescription + '</p>';
    }

    if (talent.current < talent.max) {
        tooltip.innerHTML += '<p><b>Next: </b>' + nextDescription + '</p>';
    }
}

function putPoint(event) {
    const element = event.target.classList.contains('talentbox') ? event.target : event.target.parentNode;
    const tree = element.id.split("_")[0];
    const index = element.id.split("_")[1];

    const tooltip = document.getElementById('tooltip_'+tree+'_'+index);

    let talent = build[tree].talents.find((item) => item.id == index);
    
    if (talent.current < talent.max && build[tree].total >= ((talent.row)*5) && build[tree].total < build[tree].max) {
        build[tree].talents.map(item => {
            if (item.id === talent.id) {
                item.current++;
            }
        });
        build[tree].total++;
        document.querySelector('#' + element.id + ' .talentcounter').innerHTML = talent.current+"/"+talent.max;
        document.querySelector('#' + tree + ' .specheader').innerHTML = tree.toUpperCase() + ' (' + build[tree].total + ')';
        popup(tooltip);
    }

    tooltip.showPopover({ source: element });
}

function removePoint(event) {
    event.preventDefault();
    const element = event.target.classList.contains('talentbox') ? event.target : event.target.parentNode;
    const tree = element.id.split("_")[0];
    const index = element.id.split("_")[1];

    const tooltip = document.getElementById('tooltip_'+tree+'_'+index);

    let talent = build[tree].talents.find((item) => item.id == index);
    
    if (talent.current > 0) {
        build[tree].talents.map(item => {
            if (item.id === talent.id) {
                item.current--;
            }
        });
        build[tree].total--;
        document.querySelector('#' + element.id + ' .talentcounter').innerHTML = talent.current+"/"+talent.max;
        document.querySelector('#' + tree + ' .specheader').innerHTML = tree.toUpperCase() + ' (' + build[tree].total + ')';
        popup(tooltip);
    }

    tooltip.showPopover({ source: element });
}
