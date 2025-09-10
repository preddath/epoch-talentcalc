var build = JSON.parse(JSON.stringify(trees));

function initTrees() {
    let container = document.getElementById('container');
    Object.keys(build).forEach((key) => {
        let tree = build[key];
        container.innerHTML+= "<div class='specbox' id='"+key+"'>" +
        '<span class="specheader">'+ key.toUpperCase() +' (0)</span>' +
        '<div id="'+key+'_tree" class="spectree" style="background-image: url('+ tree.image +'); background-size: cover;">' +
        '</div>' +
        '</div>';

        let keytree = document.getElementById(key+'_tree');
        for (let i = 0; i < 9; i++) {
            keytree.innerHTML += '<div class="specrow" id="'+key+'_row_'+i+'"></div>';

            const row = document.getElementById(key+'_row_'+i);
            let filteredTalents = build[key].talents.filter((item) => item.row == i);
            for (let j=0;j<4;j++) {
                if (!filteredTalents.find(item => item.col == j)) {
                    row.innerHTML+= '<span style="width: 66px;"></span>';
                } else {
                    const talent = filteredTalents.find((item) => item.col == j);
                    row.innerHTML+= 
                    '<div class="talentbox" id="'+key+'_'+talent.id+'" onclick="putPoint(event)">' + 
                    '<img src="'+talent.image+'" class="talent"/>' + 
                    '<span class="talentcounter">'+talent.current+'/'+talent.max+'</span>' +
                    '</div>';

                    // document.getElementById(key+'_'+talent.id).addEventListener('click', putPoint);
                }
            }
        }

        
    });
}

function putPoint(event) {
    const element = event.target.classList.contains('talentbox') ? event.target : event.target.parentNode;
    const tree = element.id.split("_")[0];
    const index = element.id.split("_")[1];

    let talent = build[tree].talents.find((item) => item.id == index);
    
    if (talent.current < talent.max && build[tree].total >= ((talent.row)*5)) {
        build[tree].talents.map(item => {
            if (item.id === talent.id) {
                item.current++;
            }
        });
        build[tree].total++;
        document.querySelector('#' + element.id + ' .talentcounter').innerHTML = talent.current+"/"+talent.max;
        document.querySelector('#' + tree + ' .specheader').innerHTML = tree.toUpperCase() + ' (' + build[tree].total + ')';
    } else {
        //build[tree].map(item => {
            //if (item.index === talent.index) {
                //item.current = 0;
            //}
        //});
        //document.querySelector('#' + element.id + ' .talentcounter').innerHTML = "0/"+talent.max;
    }
}
