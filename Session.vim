let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Data/WS/oxfordresumes
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 classic.tex
badd +1 /tmp/bash-fc.bONmGb
badd +6 package.json
badd +1 /tmp/bash-fc.71ozVJ
badd +11 next.config.js
badd +47 package.json.bak
badd +1 src/index.js
badd +61 package-lock.json
badd +5 pages/index.js
badd +28 ~/.config/nvim/init.vim
badd +27 pages/_app.js
badd +1 pages/contactus.js
badd +1 pages/package.json
badd +1 pages/integrations.js
badd +1 pages/custom.js
badd +1 \[Plugins]
badd +9 components/indexText.js
badd +134 ~/.config/vifm/vifmrc
badd +1 \[Plugins]\ (2)
badd +1 \[Plugins]\ (3)
badd +1 \[Plugins]\ (4)
badd +1 \[Plugins]\ (5)
badd +1 \[Plugins]\ (6)
badd +1 \[Plugins]\ (7)
badd +342 styles/styles.less
badd +79 components/myMenu.js
badd +2 typesetting.js
badd +6 pages/followup.js
badd +1 pages/proofreading.js
badd +9 ~/Data/Software/kitty/vimsession
badd +6 ~/Data/Software/kitty/paul.conf
badd +1 ~/Data/WS/oxfordresumes
badd +1 components/contactText.js
badd +1 pages/typesetting.js
badd +1 components/useFormValidation.js
badd +1 ~/Data/WS/friendlyghost.dev/pages/contactus.js
badd +56 combinedform3.js
badd +91 ~/.bashrc
badd +20 components/consultationText.js
badd +36 components/keywordText.js
badd +10 pages/keywords.js
badd +1 pages/keywords.js.bak
badd +1 ~/Data/NewVideos/Taking\ Advantage\ of\ Using\ Snippets\ with\ UltiSnips\ and\ Vim-Snippets-Co4S_uJYb1o.mkv
badd +17 components/proofreadingText.js
badd +3 components/smallbathroomText.js
badd +13 typesettingTextTwocolumn.js
badd +15 examples/twocolumn.pdf
badd +1 pages/consultation.js.bak
badd +1 \[Plugins]\ (8)
badd +12 components/keywordsText.js
badd +365 ~/Data/WS/premiercreek/styles/styles.less
badd +2 node_modules/slick-carousel/slick/slick.less
badd +1 node_modules/slick-carousel/slick/slick-theme.less
badd +1 sidePanelModern.js
badd +16 components/sidePanel.js
badd +16 components/sidePanelPDF.js
badd +18 components/sidePanelpdf.js
badd +1 pages/consultation.js
badd +1 pages/proofreading/\[format].js
badd +1 pages/typesetting/\[format].js
badd +1 pages/typesetting/modern.js
badd +24 components/typesettingText.js
badd +14 typesettingTextModern.js
badd +1 typesettingTextnophoto.js
badd +1 typesettingTextRows.js
badd +1 typesettingTextSidebar.js
badd +18 pages/typesetting/nophoto.js
badd +13 pages/typesetting/twocolumn.js
badd +13 pages/typesetting/sidebar.js
badd +13 pages/typesetting/rows.js
badd +1 components/typesettingtextModern.js
badd +6 components/formatList.js
badd +1 styles/styles.css
badd +5 .babelrc
badd +7 styles/fontBreakpoints.less
badd +4 styles/breakpoints.less
badd +5 components/Layout.js
badd +10 pages/typesetting/modern.js.bak
badd +1 typesettingText.js
badd +21 components/contactSidePanel.js
badd +1 \[Plugins]\ (9)
badd +2 components/typesettingtextSidebar.js
badd +2 components/typesettingText.js.bak
badd +8 .eslintrc
badd +76 pages/api/formidable.js
badd +14 .eslintrc.json
badd +1 components/burgermenu.js
badd +3 components/followupText.js
badd +7 components/typesettingtextNophoto.js
badd +7 components/typesettingtextRows.js
badd +7 components/typesettingtextTwocolumn.js
badd +10 pages/_document.js
badd +5 src/createEmotionCache
badd +1 src/theme
badd +11 components/sidePanel.js.bak
badd +1 \[Plugins]\ (10)
badd +1 src/theme.js
badd +1 components/validateAuth.js
badd +16 pages/api/formidable3.js
badd +70 components/combinedForm.js
badd +21 combinedForm.js
badd +1 styles/fontBreakpoints.css
badd +42 components/materialMenu.js
badd +59 styles/styles.less.bak
badd +1 components/combinedForm3.js
badd +18 components/hookdrop.js
badd +4 components/fileInput.js
badd +1 pages/HookForm.js
badd +1 ~/Data/WS/friendlyghost.dev/components/existingText.js
badd +1 styles/tabs.css
badd +9 components/myMenu_original.js
badd +1 ~/Data/Health/Covid-19/First\ case\ of\ postmortem\ study\ in\ a\ patient\ vaccinated\ against\ SARS-CoV-2.pdf
badd +1 pages/contactus.js.bak
badd +157 components/myMenu_material.js
badd +2 components/myMenu2.js
badd +67 components/myMenu_material.js.bak
badd +55 examples/sourabh_bajaj_resume.tex
badd +1 examples/classic.tex
badd +1 examples/rows.tex
badd +1 examples/sidebar.tex
badd +2 examples/sidebarleft.tex
badd +1 examples/twocolumn.tex
badd +1 examples/modern.tex
badd +1 examples/olderstyle.tex
badd +1 examples/basic.tex
badd +11 components/pricesText.js
badd +2 components/myMenu_old.js
badd +2 styles/theme.js
badd +1 components/thankyou.js
badd +7 pages/thankyou.js
badd +29 components/thankyouText.js
badd +1 ~/Data/Software/kitty/Session.vim
badd +1 paul.tex
argglobal
%argdel
$argadd examples/classic.tex
edit classic.tex
set splitbelow splitright
set nosplitbelow
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOF
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
