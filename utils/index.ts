export function formatedDate(date: string) {
    return new Date(date).toLocaleDateString("pt-BR");
}

export function formatDateToInput(date: Date | string) {
    return new Date(date).toISOString().split("T")[0];
  }