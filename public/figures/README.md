# Report figures

Figure 1 (Overall System Diagram) appears on page 3 of the report PDF.

To add it here for reference (e.g. for 3D layout):

- **Option A:** If you have [poppler](https://poppler.freedesktop.org/) installed (`pdftoppm`), run from `site/`:
  ```bash
  pdftoppm -png -f 3 -l 3 public/report.pdf public/figures/figure1
  ```
  This creates `figure1-1.png`.

- **Option B:** Open `report.pdf`, go to page 3, export or screenshot the diagram, and save as `figure1.png` in this folder.
