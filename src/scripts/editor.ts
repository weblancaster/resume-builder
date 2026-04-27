export let isEditing = false;

export const toggleEdit = (): boolean => {
  isEditing = !isEditing;
  const fields = document.querySelectorAll<HTMLElement>('[data-field]');
  fields.forEach(el => {
    el.contentEditable = isEditing ? 'true' : 'false';
  });
  document.body.classList.toggle('edit-mode', isEditing);
  return isEditing;
};
