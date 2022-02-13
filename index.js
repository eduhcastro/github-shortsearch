// Main function
function GitHubShort() {
  //Get informations from repository
  function GetInformations(target, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/repos/" + target);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhr.responseText);
        if (callback) callback(response);
      }

      ;
    };
  }

  ; // Get all repositoryes from menu 

  document.querySelectorAll(".repo-list-item.hx_hit-repo.d-flex.flex-justify-start.py-4.public.source").forEach(function (element, key) {
    // project name
    var name = element.childNodes[3].childNodes[1].childNodes[1].innerText;
    GetInformations(name, function (data) {
      var cloneHttps = `<div class="input-group">
      <div class="input-group-button">
        <div data-attribute="clone" data-url="${data.clone_url}" data-cli="${data.full_name}" aria-label="Copy to clipboard" class="btn btn-sm js-clipboard-copy tooltipped-no-delay ClipboardButton js-clone-url-http" data-copy-feedback="Copied!" data-tooltip-direction="n" tabindex="0" role="button"><svg data-attribute="clone" data-url="${data.clone_url}" data-cli="${data.full_name}"  aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-terminal mr-2">
  <path data-attribute="clone" data-url="${data.clone_url}" data-cli="${data.full_name}" fill-rule="evenodd" d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25H1.75zM7.25 8a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L5.44 8 3.72 6.28a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm1.5 1.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path>
</svg></div>
      </div>
<input type="text" name="${data.full_name} input" class="form-control input-monospace input-sm color-bg-subtle" data-autoselect="" value="${data.clone_url}" aria-label="${data.clone_url}" readonly="">
      <div class="input-group-button">
        <clipboard-copy data-target="${data.full_name}" value="x" aria-label="Copy to clipboard" class="btn btn-sm js-clipboard-copy tooltipped-no-delay ClipboardButton js-clone-url-http" data-copy-feedback="Copied!" data-tooltip-direction="n"  tabindex="0" role="button"><svg  data-target="${data.full_name}" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon d-inline-block">
        <path  data-target="${data.full_name}" fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path data-target="${data.full_name}" fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
    </svg><svg data-target="${data.full_name}" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-inline-block d-none">
        <path data-target="${data.full_name}" fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
    </svg></clipboard-copy>
      </div>
    </div>`;
      /*
            var desktop = `<details id="funding-links-modal-momentum-mod-game" class="details-reset details-overlay details-overlay-dark d-inline-block float-left">
            <summary title="Sponsor momentum-mod/game" data-view-component="true" class="btn-sm btn" role="button">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-desktop-download mr-2">
        <path d="M4.927 5.427l2.896 2.896a.25.25 0 00.354 0l2.896-2.896A.25.25 0 0010.896 5H8.75V.75a.75.75 0 10-1.5 0V5H5.104a.25.25 0 00-.177.427z"></path><path d="M1.573 2.573a.25.25 0 00-.073.177v7.5a.25.25 0 00.25.25h12.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-3a.75.75 0 110-1.5h3A1.75 1.75 0 0116 2.75v7.5A1.75 1.75 0 0114.25 12h-3.727c.099 1.041.52 1.872 1.292 2.757A.75.75 0 0111.25 16h-6.5a.75.75 0 01-.565-1.243c.772-.885 1.192-1.716 1.292-2.757H1.75A1.75 1.75 0 010 10.25v-7.5A1.75 1.75 0 011.75 1h3a.75.75 0 010 1.5h-3a.25.25 0 00-.177.073zM6.982 12a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5H6.982z"></path>
      </svg>Desktop</summary>  <details-dialog class="anim-fade-in fast Box Box--overlay d-flex flex-column" src="/momentum-mod/game/funding_links?fragment=1" preload="" role="dialog" aria-modal="true">
              <div class="Box-header">
                <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog="">
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
              <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
          </svg>
                </button>
                <h3 class="Box-title">
                  Sponsor momentum-mod/game
                </h3>
              </div>
              <div class="overflow-auto">
                
          <div class="text-left f5">
            <div class="color-bg-default px-3 pt-3">
                <h5 class="flex-auto mb-3 mt-0">External links</h5>
                <div class="d-flex mb-3">
                  <div class="circle mr-2 border d-flex flex-justify-center flex-items-center flex-shrink-0" style="width:24px;height:24px;">
                    <img width="16" height="16" class="octicon rounded-1 d-block" alt="open_collective" src="https://github.githubassets.com/images/modules/site/icons/funding_platforms/open_collective.svg">
                  </div>
                  <div class="flex-auto min-width-0">
                    <a target="_blank" data-ga-click="Dashboard, click, Nav menu - item:org-profile context:organization" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.repo_funding_links_link_click&quot;,&quot;payload&quot;:{&quot;platform&quot;:{&quot;platform_type&quot;:&quot;OPEN_COLLECTIVE&quot;,&quot;platform_url&quot;:&quot;https://opencollective.com/momentum-mod&quot;},&quot;platforms&quot;:[{&quot;platform_type&quot;:&quot;OPEN_COLLECTIVE&quot;,&quot;platform_url&quot;:&quot;https://opencollective.com/momentum-mod&quot;}],&quot;repo_id&quot;:26099967,&quot;owner_id&quot;:11344047,&quot;user_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/momentum-mod/game/funding_links?fragment=1&quot;}}" data-hydro-click-hmac="6a582e4833eeb6ff80b3ebd30c36e13d83e652a726270856207a51c21ebae515" href="https://opencollective.com/momentum-mod"><span>opencollective.com/<strong>momentum-mod</strong></span></a>
                  </div>
                </div>
          
            </div>
            <div class="text-small p-3 border-top">
              <p class="my-0">
                <a href="https://docs.github.com/articles/displaying-a-sponsor-button-in-your-repository">Learn more about funding links in repositories</a>.
              </p>
                <p class="my-0">
                  <a class="Link--secondary" href="/contact/report-abuse?report=momentum-mod%2Fgame+%28Repository+Funding+Links%29">Report abuse</a>
                </p>
            </div>
          </div>
          
              </div>
            </details-dialog>
          </details>`; */

      var downloadZip = `<details class="details-reset details-overlay-dark d-inline-block float-left"  data-name="${name}" data-branch="${data.default_branch}" data-attribute="download" open="">
        <summary  data-name="${name}" data-branch="${data.default_branch}" data-attribute="download" title="Sponsor momentum-mod/game" data-view-component="true" class="btn-sm btn" role="button">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-file-zip mr-2">
      <path data-name="${name}" data-branch="${data.default_branch}" data-attribute="download" fill-rule="evenodd" d="M3.5 1.75a.25.25 0 01.25-.25h3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h2.086a.25.25 0 01.177.073l2.914 2.914a.25.25 0 01.073.177v8.586a.25.25 0 01-.25.25h-.5a.75.75 0 000 1.5h.5A1.75 1.75 0 0014 13.25V4.664c0-.464-.184-.909-.513-1.237L10.573.513A1.75 1.75 0 009.336 0H3.75A1.75 1.75 0 002 1.75v11.5c0 .649.353 1.214.874 1.515a.75.75 0 10.752-1.298.25.25 0 01-.126-.217V1.75zM8.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM6 5.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 016 5.25zm2 1.5A.75.75 0 018.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 6.75zm-1.25.75a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM8 9.75A.75.75 0 018.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 018 9.75zm-.75.75a1.75 1.75 0 00-1.75 1.75v3c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-3a1.75 1.75 0 00-1.75-1.75h-.5zM7 12.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v2.25H7v-2.25z"></path>
  </svg>ZIP</summary>
        </details>`; // not containe menu

      if (element.childNodes[3].childNodes[1].childNodes.length < 5) {
        // create div to menu
        var flexitems = document.createElement("div");
        var element2 = element.childNodes[3].childNodes[1];
        flexitems.className = "div d-flex flex-items-center flex-justify-end flex-shrink-0 flex-auto opa";
        flexitems.innerHTML = cloneHttps + downloadZip; //+ desktop;

        element2.appendChild(flexitems);
      } else {
        var flexitems = element.childNodes[3].childNodes[1].childNodes[3];
        flexitems.innerHTML = cloneHttps + downloadZip + flexitems.innerHTML; //+ desktop;
      }
    });
  });
}

document.body.onclick = function (e) {
  // ZIP
  if (e.target.dataset.attribute == "download") {
    return Download(e.target.dataset.name, e.target.dataset.branch);
  }

  if (e.target.dataset.attribute == "clone") {
    return Clone(e);
  }

  if (typeof e.target.dataset.target !== "undefined") {
    const cb = navigator.clipboard;
    const paragraph = document.getElementsByName(e.target.dataset.target + " input")[0].value;
    cb.writeText(paragraph);
  }
}; // Download zip


function Download(repository, branch) {
  window.open("https://github.com/" + repository + "/archive/refs/heads/" + branch + ".zip", '_blank');
}

function Clone(e) {
  if (document.getElementsByName(e.target.dataset.cli + " input")[0].value == e.target.dataset.url) {
    document.getElementsByName(e.target.dataset.cli + " input")[0].value = "gh repo clone " + e.target.dataset.cli;
    document.getElementsByName(e.target.dataset.cli + " clip")[0].value = "gh repo clone " + e.target.dataset.cli;
  } else {
    document.getElementsByName(e.target.dataset.cli + " input")[0].value = e.target.dataset.url;
    document.getElementsByName(e.target.dataset.cli + " clip")[0].value = e.target.dataset.url;
  }
} // Observer Dom


const observer = new MutationObserver(function (a) {
  // Event function to click page
  GitHubShort();
});
observer.observe(document.querySelector("#js-pjax-container"), {
  childList: true
}); // Start

GitHubShort();