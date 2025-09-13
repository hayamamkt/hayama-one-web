import { Component } from '@angular/core';

@Component({
  selector: 'app-shell-search-btn',
  imports: [],
  template: `
    <button class="btn btn-ghost btn-circle" title="Search"
      onclick="search_modal.showModal()"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>
    <dialog id="search_modal" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">algolia.com</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <p>Use algolia.com to search</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  `
})
export class SearchBtnComponent {

}
