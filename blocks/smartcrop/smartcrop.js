export default async function decorate(block){
    const blockAuthor = document.createElement('div');
    var assetId = null;
    [...block.children].forEach((row) => {
        if(row.children[0].innerHTML === "title"){
            const propertydiv = document.createElement('div');
            propertydiv.classList.add(`video-`+row.children[0].innerHTML);
            propertydiv.innerHTML = `<p> ${row.children[1].innerHTML} </p>`;
            blockAuthor.appendChild(propertydiv);
        }else{
            assetId = row.children[1].innerHTML;
        }
    })

    var s7smartcropvideoviewer = new s7viewers.SmartCropVideoViewer({
		"containerId" : "s7smartcropvideo_div",
		"params" : { 
			"serverurl" : "https://s7ap1.scene7.com/is/image/",
			"contenturl" : "https://s7ap1.scene7.com/is/content/", 
			"config" : "nagarrosoftwarepvtltd/Shoppable_Video_Dark",
			"videoserverurl": "https://s7ap1.scene7.com/is/content",
			"asset" : assetId 
        }
	})
    
    // var s7smartcropvideoviewer = new s7viewers.SmartCropVideoViewer({
    //         "containerId" : "s7smartcropvideo_div",
    //         "params" : { 
    //           "serverurl" : "https://s7ap1.scene7.com/is/image/",
    //           "contenturl" : "https://s7ap1.scene7.com/is/content/", 
    //           "config" : "chinmaypanditapac01/SmartCropVideo_social",
    //           "videoserverurl": "https://s7ap1.scene7.com/is/content",
    //           "asset" : assetId 
    //     }
    // })
    s7smartcropvideoviewer.init();

    const containerDiv = document.createElement('div');
    containerDiv.id = "s7smartcropvideo_div";
    containerDiv.classList.add("smart-crop-video_social");
    blockAuthor.appendChild(containerDiv);

    block.innerHTML = blockAuthor.innerHTML;
}