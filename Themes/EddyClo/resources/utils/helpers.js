export const formatCurrency = number =>
    new Intl.NumberFormat("vi-VI", {
        style: "currency",
        currency: "VND"
    }).format(number);
