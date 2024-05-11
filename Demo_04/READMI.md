### Tạo cấu trúc thư viện Grid System dùng cho Responsive:

## Grid:
-> full width: 100%;
-> reset padding: 0
-> display: block
-> initial .grid.wide -> max-width: 1200px margin: 0 auto

/* ==================================================== */
## Row:
->  display: flex;
->  flex-wrap: wrap;

==> MOBILE: margin-left,margin-right: -4px;
==> TABLET: margin-left, margin-right: -8px
==> PC    : margin-left, margin-right: -12px
=> Row sử dụng margin với giá trị âm để bù lại phần padding của column (gutters)
/* ==================================================== */
## Column:

- class: .col
- Prefix class:

  - c -> column -> Moblie
  - m -> medium -> Tablet
  - l -> large -> PC

- Đối với Layout chia theo 12 Columns :
  -> Công thức tính : (100 / columns_count) \* column_now

+ VD Col 1: (100 / 12) \* 1 = 8.33333%;
+  flex: flex-row flex-shrink flex-basis
+ flex: 0 0 8.33333%; -> max-width: 8.33333%
+ ....
+ Col 12: (100 / 12) \* 12 = 100 %
+ flex: 0 0 100%; -> max-width: 8.33333%-> max-width: 100%

==> MOBILE: padding-left,padding-right:  4px;
==> TABLET: padding-left, padding-right: 8px
==> PC    : padding-left, padding-right: 12px
/* ==================================================== */
### Chia Breakpoint Responsive :

## ( > Tablet ): @media (min-width: 740px) -> css .row, .col -> padding,margin; -> .m (column for table {0,....12})

## ( > PC low):  @media (min-width: 1113px) -> css .row, .col -> padding,margin; -> .l (column for PC(low) {0,..12})

## (Tablet - PC): @media (min-width: 740px) and (max-width: 1023px) -> css .wide -> width: 644px;

## (PC (low) -> PC (high)): @media (min-width: 1024px) and (max-width: 1239px) -> css .wide -> width: 984px; .wide.row -> margin; -> .wide .l (column PC {0,...12})


## Lưu ý:
-> các column: .l-0, .c-0, .m-0 -> dùng "display: none" -> ẩn cột khi cần dùng
-> các column: {.l-1 -> .l-12};     {.m-1 -> .m-12};                   {.c-1 -> .c-12}             => đại diện cho 12 cột trên các thiết bị nên để "display: block" -> tránh phát sinh lỗi ngoài mong muốn
