(function () {
    var optionsG = {
        showBtnClass: '',
        showBtnHtml: 'Show',
        outerBoxClass: '',
        innerBoxClass: '',
        closeBtnClass: '',
        closeBtnHtml: 'x',
        bodyContentHtml: 'Its lightbox content',
        closeBtnCallback: function () { },
        showBtnCallback: function () { }
    }
    Element.prototype.lightbox = function (_options) {
        if (_options) {
            this.options = { ...optionsG, ..._options };
        }else{
            this.options = optionsG;     
        }
        var objLocal = this;
        var styleContent = `<style>
        .lightbox-${objLocal.id} {
            display: none;
            z-index: 0;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(12 10 10 / 46%)
        }

        .lightbox-content-${objLocal.id} {
            position: fixed;
            background-color: blanchedalmond;
            width: 200px;
            padding: 10%;
            top: 30%;
            left: 30%;
        }

        .close-${objLocal.id} {
            position: absolute;
            right: 5%;
            top: 5%;
            cursor: pointer;
        }
    </style>`;
        var htmlContent = `
        <button id="lightbox-show-btn-${objLocal.id}" class="${objLocal.options.showBtnClass}">${objLocal.options.showBtnHtml}</button>
    <div id="lightbox-element-${objLocal.id}" class="lightbox-${objLocal.id} ${objLocal.options.outerBoxClass}">
        <div class="lightbox-content-${objLocal.id} ${objLocal.options.innerBoxClass}">
            <span id="lightbox-hide-btn-${objLocal.id}" class="close-${objLocal.id} ${objLocal.options.innerBoxClass}">${objLocal.options.closeBtnHtml}</span>
            ${objLocal.options.bodyContentHtml}
        </div>
    </div>`;
        objLocal.innerHTML = htmlContent;
        objLocal.innerHTML += styleContent;
        document.getElementById(`lightbox-show-btn-${objLocal.id}`).addEventListener("click", function () {
            document.getElementById(`lightbox-element-${objLocal.id}`).style.display = "block";
            objLocal.options.showBtnCallback();
        });
        document.getElementById(`lightbox-hide-btn-${objLocal.id}`).addEventListener("click", function () {
            document.getElementById(`lightbox-element-${objLocal.id}`).style.display = "none";
            objLocal.options.closeBtnCallback();
        });
    }

})();