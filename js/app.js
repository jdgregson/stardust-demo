"use strict";
var loadingBarDemo = function (percent) {
    if (percent === void 0) { percent = 0; }
    if (percent >= 100) {
        updateLoadingBar(100);
    }
    else {
        updateLoadingBar(percent);
        percent += Math.floor(Math.random() * 30);
        self.setTimeout(function () {
            loadingBarDemo(percent);
        }, Math.floor(Math.random() * 1000));
    }
};
var initApp = function () {
    addModal('demo', "\n    <div>\n      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nibh commodo, sollicitudin orci id, rutrum neque. Cras eu purus fringilla, mattis lacus eu, congue odio. Duis volutpat odio nec massa tempor, at vulputate dolor ullamcorper. Cras consequat feugiat diam ut sagittis. Mauris auctor interdum neque sed convallis. Ut scelerisque nisi sit amet lectus tempus, quis finibus purus lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque sit amet nisl sed viverra. Integer eu velit a nisl ultrices suscipit at ac tortor. Nulla auctor hendrerit velit in viverra. Vivamus sodales bibendum purus id tincidunt.\n      <br><br>\n      <img src=\"art/hello-diff.png\" />\n      <br><br>\n      Quisque laoreet elit sit amet tellus hendrerit, a faucibus libero vehicula. Etiam gravida dui quis purus rhoncus egestas. Cras vitae lectus nec felis iaculis vulputate. Integer luctus tellus mi, cursus commodo enim gravida non. Sed ut ligula sed arcu suscipit commodo vitae vulputate quam. Quisque ac diam eget sapien interdum posuere. Sed augue arcu, fermentum ut hendrerit vitae, auctor non felis.\n      <br><br>\n      Integer eu massa vitae ligula ultricies euismod non in orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vulputate congue massa, ac elementum diam posuere faucibus. Proin massa metus, porta auctor congue eu, euismod vitae quam. Nullam maximus pulvinar consequat. Duis quis nulla id leo posuere fermentum. In feugiat semper ipsum, at laoreet lacus. Maecenas faucibus in urna porttitor imperdiet. Cras aliquam efficitur ipsum vitae euismod. Curabitur sodales, urna nec consequat sollicitudin, quam erat eleifend felis, nec consequat ex justo eget libero. Vivamus eu urna in quam porttitor vulputate.\n    </div>\n  ", 'Demo modal');
    initStardust({
        actions: {
            showDemoModal: function () {
                showModal('demo');
            },
            toggleCheckbox: function () {
                var c = document.getElementById('checkbox');
                if (c) {
                    c.click();
                }
            },
            showToast: function () {
                showToast('This is a toast');
            },
            showLoadingBar: function () {
                loadingBarDemo();
            }
        },
        options: {
            checkbox_checked: true
        }
    });
};
//# sourceMappingURL=app.js.map