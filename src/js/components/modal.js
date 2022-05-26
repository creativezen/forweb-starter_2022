import ForwebModal from "../classes/Modal";

export const modal = new ForwebModal();

document.querySelectorAll('.forweb-modal__container').forEach(item => {
  item.addEventListener('click', function(e) {
    if (e.target.closest('.js-close')) {
      modal.close()
    }
  })
})