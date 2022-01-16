"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[477],{10:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"customize-windows-terminal","metadata":{"permalink":"/blog/customize-windows-terminal","editUrl":"https://github.com/Apriil15/apriil15.github.io/tree/master/blog/2022-01-16-customize-windows-terminal/index.md","source":"@site/blog/2022-01-16-customize-windows-terminal/index.md","title":"Customize Windows Terminal","description":"\u5de5\u4f5c\u4e0a\u4f7f\u7528 Mac \u6709 iTerm2 + oh my zsh\uff0c\u9084\u6709 autosuggestions\uff08\u89e3\u6551\u84bc\u751f QQ\uff09","date":"2022-01-16T00:00:00.000Z","formattedDate":"January 16, 2022","tags":[{"label":"terminal","permalink":"/blog/tags/terminal"}],"readingTime":3.575,"truncated":true,"authors":[{"name":"apriil15","title":"Back End Engineer","url":"https://github.com/apriil15","imageURL":"https://github.com/apriil15.png","key":"apriil15"}],"nextItem":{"title":"\u56de\u9867 2021","permalink":"/blog/review-2021"}},"content":"\u5de5\u4f5c\u4e0a\u4f7f\u7528 Mac \u6709 [iTerm2](https://iterm2.com/) + [oh my zsh](https://ohmyz.sh/)\uff0c\u9084\u6709 [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)\uff08\u89e3\u6551\u84bc\u751f QQ\uff09\\n\\n\u96d6\u7136\u5bb6\u88e1 Windows \u96fb\u8166\u5b89\u88dd\u4e86 WSL\uff0c\u4f46\u6709\u6642\u4f7f\u7528 `gcloud`\u3001`kubectl`\uff0c\u6703\u6709\u5f88\u6162\u7684\u554f\u984c\\n\\nPowerShell \u53c8\u4e00\u76f4\u89ba\u5f97\u96e3\u770b\u4e14\u4e0d\u597d\u7528 XD\uff0c\u56e0\u6b64\u641c\u5c0b\u4e86\u4e00\u4e0b\u600e\u9ebc\u4fee\u6539 Windows Terminal\\n\\n\u4e3b\u8981\u662f\u7b46\u8a18\u7d66\u672a\u4f86\u63db\u65b0\u96fb\u8166\u7684\u81ea\u5df1\uff0c\u4ee5\u53ca\u5206\u4eab\u7d66\u6709\u9700\u8981\u7684\u4eba\\n\\n\x3c!--truncate--\x3e\\n\\n## \u4fee\u6539 font\\n\\n1. download [Nerd Fonts](https://www.nerdfonts.com/font-downloads)\\n\\n2. \u89e3\u58d3\u7e2e\u5f8c\u627e\u5230\u559c\u6b61\u7684\u5b57\u9ad4\uff0c\u5b89\u88dd\u6a94\u540d\u5f8c\u9762\u662f `Windows Compatible.ttf` \u7684\u6a94\u6848\\n\\n   ![](./images/font.png)\\n\\n3. Windows Terminal \u66f4\u6539\u5b57\u9ad4\\n\\n   ![](./images/change-font.png)\\n\\n## \u4fee\u6539\u900f\u660e\u5ea6\\n\\n1. \u9ede\u958b\u555f\\n\\n   ![](./images/2.png)\\n\\n2. \u958b\u555f\u58d3\u514b\u529b\uff0c\u4e26\u8abf\u6574\u900f\u660e\u5ea6\\n\\n   ![](./images/3.png)\\n\\n\u5c31\u6703\u770b\u5230 terminal \u8b8a\u900f\u660e\u4e86\uff01\\n\\n:::info\\n\ud83d\udca1 \u9019\u908a\u8981\u6ce8\u610f\u7684\u662f\uff0cWindows \u8a2d\u5b9a\u7684`\u900f\u660e\u6548\u679c`\u8981\u8a18\u5f97\u958b\u555f\uff0c\u4e0d\u7136 terminal \u8a2d\u5b9a\u7684\u900f\u660e\u6703\u7121\u6548\\n:::\\n\\n![](./images/4.png)\\n\\n## Install PowerShell\\n\\n1. open `Microsoft Store` and find `PowerShell`\\n\\n   ![](./images/5.png)\\n\\n2. \u5c07 PowerShell \u6539\u6210\u9810\u8a2d\\n\\n   ![](./images/6.png)\\n\\n## \u4fee\u6539 terminal \u8272\u5f69\u914d\u7f6e\\n\\n1. \u6253\u958b Windows Terminal \u8a2d\u5b9a\u6a94\\n\\n   ![](./images/7.png)\\n\\n2. \u9996\u5148\u641c\u5c0b\u539f\u672c\u5c31\u6709\u7684 `One Half Dark` \u5982\u4e0b\\n\\n   ```json\\n   {\\n     \\"background\\": \\"#282C34\\",\\n     \\"black\\": \\"#282C34\\",\\n     \\"blue\\": \\"#61AFEF\\",\\n     \\"brightBlack\\": \\"#5A6374\\",\\n     \\"brightBlue\\": \\"#61AFEF\\",\\n     \\"brightCyan\\": \\"#56B6C2\\",\\n     \\"brightGreen\\": \\"#98C379\\",\\n     \\"brightPurple\\": \\"#C678DD\\",\\n     \\"brightRed\\": \\"#E06C75\\",\\n     \\"brightWhite\\": \\"#DCDFE4\\",\\n     \\"brightYellow\\": \\"#E5C07B\\",\\n     \\"cursorColor\\": \\"#FFFFFF\\",\\n     \\"cyan\\": \\"#56B6C2\\",\\n     \\"foreground\\": \\"#DCDFE4\\",\\n     \\"green\\": \\"#98C379\\",\\n     \\"name\\": \\"One Half Dark\\",\\n     \\"purple\\": \\"#C678DD\\",\\n     \\"red\\": \\"#E06C75\\",\\n     \\"selectionBackground\\": \\"#FFFFFF\\",\\n     \\"white\\": \\"#DCDFE4\\",\\n     \\"yellow\\": \\"#E5C07B\\"\\n   }\\n   ```\\n\\n3. \u518d\u8907\u88fd\u8cbc\u4e0a\u4e00\u500b\u65b0\u7684\uff0c\u4e26\u4fee\u6539 `background` & `name`\\n\\n   ```json\\n   {\\n     \\"background\\": \\"#001B26\\", // \u4fee\u6539 background\\n     \\"black\\": \\"#282C34\\",\\n     \\"blue\\": \\"#61AFEF\\",\\n     \\"brightBlack\\": \\"#5A6374\\",\\n     \\"brightBlue\\": \\"#61AFEF\\",\\n     \\"brightCyan\\": \\"#56B6C2\\",\\n     \\"brightGreen\\": \\"#98C379\\",\\n     \\"brightPurple\\": \\"#C678DD\\",\\n     \\"brightRed\\": \\"#E06C75\\",\\n     \\"brightWhite\\": \\"#DCDFE4\\",\\n     \\"brightYellow\\": \\"#E5C07B\\",\\n     \\"cursorColor\\": \\"#FFFFFF\\",\\n     \\"cyan\\": \\"#56B6C2\\",\\n     \\"foreground\\": \\"#DCDFE4\\",\\n     \\"green\\": \\"#98C379\\",\\n     \\"name\\": \\"One Half Dark (modded)\\", // \u4fee\u6539 name\\n     \\"purple\\": \\"#C678DD\\",\\n     \\"red\\": \\"#E06C75\\",\\n     \\"selectionBackground\\": \\"#FFFFFF\\",\\n     \\"white\\": \\"#DCDFE4\\",\\n     \\"yellow\\": \\"#E5C07B\\"\\n   }\\n   ```\\n\\n4. \u6539\u6210\u525b\u525b\u7684\u984f\u8272\u914d\u7f6e\\n\\n   ![](./images/8.png)\\n\\n## Install [Scoop](https://scoop.sh/)\\n\\n- command-line installer for Windows\\n\\n```bash\\n# install scoop\\niwr -useb get.scoop.sh | iex\\n\\n# install some packages\\nscoop install curl sudo jq\\n\\n# check install successfully\\ncurl \'https://api.inkdrop.app/\' | jq .\\n```\\n\\n## Install [NeoVim](https://neovim.io/)\\n\\n```bash\\n# install neovim\\nscoop install neovim gcc\\n\\n# check install successfully\\nnvim\\n```\\n\\n\u4f7f\u7528 `nvim` \u53ef\u80fd\u4e0d\u7b26\u5408\u4f7f\u7528\u7fd2\u6163\uff0c\u5f85\u6703\u6703\u518d\u505a\u4fee\u6539\\n\\n## Customize PowerShell config file\\n\\n1. \u5efa\u7acb `user_profile.ps1` \u7136\u5f8c\u7de8\u8f2f\\n\\n   ```bash\\n   cd ~\\n\\n   nvim .config/powershell/user_profile.ps1\\n   ```\\n\\n2. user_profile.ps1 \u52a0\u5165 alias\\n\\n   ```bash\\n   # Alias\\n   Set-Alias vim nvim\\n   Set-Alias grep findstr\\n   ```\\n\\n3. \u7de8\u8f2f\u96fb\u8166\u7684 `$PROFILE`\\n\\n   ```bash\\n   nvim $PROFILE.CurrentUserCurrentHost\\n\\n   # \u52a0\u5165\u9019\u6bb5\uff0c\u8b93 $PROFILE \u6307\u5411\u81ea\u88fd\u7684 user_profile.ps1\\n   . $env:USERPROFILE\\\\.config\\\\powershell\\\\user_profile.ps1\\n   ```\\n\\n\u4e4b\u5f8c\u53ef\u4ee5\u8a66\u8a66\u76f4\u63a5\u7528 `vim` or `grep` \u6e2c\u8a66\u6709\u6c92\u6709\u6210\u529f\\n\\n## Install [oh-my-posh](https://github.com/JanDeDobbeleer/oh-my-posh)\\n\\n1. install posh-git and oh-my-posh\\n\\n   ```bash\\n   Install-Module posh-git -Scope CurrentUser -Force\\n   Install-Module oh-my-posh -Scope CurrentUser -Force\\n   ```\\n\\n2. \u4fee\u6539 `user_profile.ps1`\\n\\n   ```bash\\n   cd ~\\n\\n   vim .config/powershell/user_profile.ps1\\n   ```\\n\\n3. \u52a0\u5165\\n\\n   ```bash\\n   # Prompt\\n   Import-Module posh-git\\n   Import-Module oh-my-posh\\n   Set-PoshPrompt powerlevel10k_lean\\n   ```\\n\\n\u4e4b\u5f8c\u53ef\u80fd\u8981\u958b\u65b0\u7684 terminal session\uff0c\u6216\u662f\u91cd\u958b terminal \u624d\u6703\u958b\u59cb\u5b89\u88dd\uff0c\u7136\u5f8c\u6703\u770b\u5230\u65b0\u7684 theme\\n\\n## Install [Terminal-Icons](https://github.com/devblackops/Terminal-Icons)\\n\\n```bash\\nInstall-Module -Name Terminal-Icons -Repository PSGallery -Force\\n\\nImport-Module Terminal-Icons\\n```\\n\\n## Install [PSReadline](https://github.com/PowerShell/PSReadLine)\\n\\n```bash\\n# install PSReadline\\nInstall-Module -Name PSReadline -AllowPrerelease -Scope CurrentUser -Force -SkipPublisherCheck\\n\\n# autocompletion\\nSet-PSReadLineOption -PredictionSource History\\n\\n# option (config that I don\'t use)\\nSet-PSReadLineOption -PredictionViewStyle ListView\\n```\\n\\n## Others\\n\\n- [themes](https://ohmyposh.dev/docs/themes)\\n\\n  \u6e2c\u8a66\u6642 terminal \u8f38\u5165\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u6539\u8b8a\u7684 theme\uff0c\u78ba\u5b9a\u8981\u7528\u6642\u8a18\u5f97\u52a0\u5165 `user_profile.ps1`\\n\\n  ```bash\\n  Set-PoshPrompt [theme_name]\\n  ```\\n\\n- my PowerShell config is [here](https://github.com/Apriil15/windows-terminal-setting/blob/master/.config/powershell/user_profile.ps1)\\n\\n## Reference\\n\\n\u4e3b\u8981\u7bc0\u9304\u81ea\u9019\u500b\u5f71\u7247\uff1a[How to set up PowerShell prompt with Oh My Posh on Windows 11](https://www.youtube.com/watch?v=5-aK2_WwrmM&list=LL&index=1&ab_channel=devaslife)"},{"id":"review-2021","metadata":{"permalink":"/blog/review-2021","editUrl":"https://github.com/Apriil15/apriil15.github.io/tree/master/blog/2021-12-31-review-2021.md","source":"@site/blog/2021-12-31-review-2021.md","title":"\u56de\u9867 2021","description":"\u804a\u804a 2021 \u505a\u4e86\u4ec0\u9ebc\u5427\uff01","date":"2021-12-31T00:00:00.000Z","formattedDate":"December 31, 2021","tags":[{"label":"review","permalink":"/blog/tags/review"}],"readingTime":2.685,"truncated":true,"authors":[{"name":"apriil15","title":"Back End Engineer","url":"https://github.com/apriil15","imageURL":"https://github.com/apriil15.png","key":"apriil15"}],"prevItem":{"title":"Customize Windows Terminal","permalink":"/blog/customize-windows-terminal"},"nextItem":{"title":"Hello Docusaurus!","permalink":"/blog/hello-docusaurus"}},"content":"\u804a\u804a 2021 \u505a\u4e86\u4ec0\u9ebc\u5427\uff01\\n\\n\x3c!--truncate--\x3e\\n\\n## \u96e2\u958b CMoney\\n\\n\u4e3b\u56e0\uff1a\u89ba\u5f97\u81ea\u5df1\u7684\u6280\u8853\u6c92\u56e0\u70ba\u5de5\u4f5c\u4e0a\u800c\u6709\u6240\u9032\u6b65\uff0c\u6210\u9577\u5f80\u5f80\u662f\u4e0b\u73ed\u4e4b\u5f8c XD\\n\\n\u5176\u5be6\u5728 20 \u5e74\u5e95\u5c31\u6709\u9019\u7a2e\u611f\u89ba\u4e86\uff0c\u4f46\u9084\u662f\u6e3e\u6e3e\u5669\u5669\u6d6a\u8cbb\u4e86\u4e00\u6bb5\u6642\u9593\u3002\\n\\n\u4eca\u5e74\u521d\u56e0\u70ba\u4e00\u4e9b\u4e8b\u4ef6\u52a0\u901f\u4e86\u6211\u7684\u96e2\u8077\u8a08\u756b\uff0c\u7136\u5f8c\u53f0\u7063\u75ab\u60c5\u5c31\u7206\u767c\u4e86\uff0c\u9032\u5165 WFH \u6642\u671f\u3002\\n\\n### WFH\\n\\n\u5c0d\u65bc\u8981\u6e96\u5099\u9762\u8a66\u7684\u4eba\uff0c\u5be6\u5728\u662f\u4e00\u5927\u798f\u97f3\\n\\n- \u8acb\u5047\u9762\u8a66\u6642\uff0c\u53ef\u4ee5\u4e00\u5929\u6392\u591a\u500b\u8996\u8a0a\u9762\u8a66 (\u751a\u81f3\u807d\u8aaa\u6709\u4eba\u4e0d\u8acb\u5047\u7684 XD)\\n\\n- \u63a5\u9762\u8a66\u9080\u7d04\u96fb\u8a71\u6642\uff0c\u5b8c\u5168\u4e0d\u7528\u5bb3\u7f9e\\n\\n- \u53ef\u4ee5\u7761\u5230\u4e0a\u73ed\u524d 10 \u5206\u9418\\n\\n### \u6e96\u5099\u9762\u8a66\\n\\n\u5927\u6982\u5206\u9019\u5e7e\u500b\u9762\u5411\u8457\u624b\uff1a\\n\\n- side project\\n\\n  \u56e0\u70ba\u7576\u521d\u6253\u7b97\u627e\u5beb Golang \u7684\u5de5\u4f5c\uff0c\u6240\u4ee5\u7528 Golang \u5beb\u4e86\u4e00\u500b [project](https://github.com/Apriil15/blog-server)\\n\\n- resume\\n\\n- LeetCode\\n\\n- \u5e38\u554f\u7684\u57fa\u790e\u77e5\u8b58 (network, security, database, os...)\\n\\n- behavior questions\\n\\n\u9019\u90e8\u5206\u4e4b\u5f8c\u4e5f\u8a31\u518d\u6574\u7406\u9762\u8a66\u7684\u5fc3\u5f97\\n\\n### \u5c0f\u7d50\\n\\n\u7e3d\u7d50\u5728 CMoney \u9084\u7b97\u6709\u6240\u6536\u7a6b\uff1a\\n\\n- \u5b78\u7fd2\u4e86 [Scrum](https://zh.wikipedia.org/wiki/Scrum) \u958b\u767c\u6d41\u7a0b\\n- \u8a8d\u8b58\u5e7e\u500b\u9084\u4e0d\u932f\u7684\u5925\u4f34 (\u96d6\u7136\u6709\u5e7e\u500b\u90fd\u96e2\u8077\u4e86 XDD)\\n- \u8001\u95c6 Ken \u6559\u7684\u9577\u671f\u6295\u8cc7\u89c0\u5ff5\\n- \u9858\u610f\u7d66\u8f49\u8077\u4ed4\u5982\u6211\u4e00\u500b\u6a5f\u6703\\n\\n\u6700\u5f8c\uff0c\u5982\u679c\u4f60\u662f\u5beb\u624b\u6a5f (Android / iOS)\uff0c\u500b\u4eba\u9084\u883b\u63a8\u85a6\u7684\uff01\\n\\n## \u6210\u9577\\n\\n### \u81ea\u5b78\\n\\n- \u81ea\u5b78 Golang\\n\\n- \u4e2d\u82f1\u6587\u76f2\u6253\\n\\n  \u82b1\u4e86\u5e7e\u500b\u79ae\u62dc\u5b78\u7fd2\uff0c\u7372\u76ca\u826f\u591a\\n\\n  \u5b78\u7fd2\u8cc7\u6e90\uff1a[keybr](https://www.keybr.com/)\u3001[10fastfingers](https://10fastfingers.com/typing-test/english)\\n\\n### \u65b0\u5de5\u4f5c\u4e0a\\n\\n- \u5b78\u7fd2\u65b0\u8a9e\u8a00 TypeScript\\n- \u5b78\u7fd2\u722c\u87f2\u958b\u767c\\n- \u5b78\u7fd2 k8s\\n- \u5b78\u7fd2 RabbitMQ producer, consumer \u67b6\u69cb\u7684\u958b\u767c\\n- \u7e3d\u7b97\u662f\u5b78\u6703\u57fa\u672c SQL \u4e86 (\u96e2\u958b CMoney \u524d\u9023 JOIN \u90fd\u4e0d\u592a\u719f\uff0c\u4e4b\u524d\u9762\u8a66\u9084\u88ab\u6158\u96fb QQ)\\n\\n## Others\\n\\n- \u66fe\u8a87\u4e0b\u8c6a\u8a9e\uff0c\u60f3\u8981\u5728 GitHub \u7684 contribution \u7a2e\u6eff\u7da0\u9ede\u9ede\uff0c\u5f8c\u4f86\u89ba\u5f97\u6709\u9ede\u70ba\u4e86\u505a\u800c\u505a\uff0c\u4f5c\u696d\u611f\u592a\u91cd\uff0c\u56e0\u6b64\u4f5c\u7f77\\n\\n- Open Source PR\\n\\n  \u7ffb\u8b6f\u7e41\u9ad4\u4e2d\u6587\u7248 - [golang-developer-roadmap](https://github.com/Alikhll/golang-developer-roadmap/blob/master/i18n/zh-TW/ReadMe-zh-TW.md)\\n\\n  \u5f88\u7c21\u55ae\u7684\u6539\u932f\u5b57 - [build-web-application-with-golang](https://github.com/astaxie/build-web-application-with-golang/pull/1165)\\n\\n- \u8cb7\u4e86\u65b0\u9375\u76e4 - Leopold FC900R-PD \u77f3\u58a8\u91d1 \u8336\u8ef8\\n\\n## 2022\\n\\n\u76ee\u524d\u4f86\u8aaa\uff0c\u77ed\u671f\u500b\u4eba\u76ee\u6a19\u9084\u662f\u6c92\u8b8a\u7684\\n\\n\u56e0\u6b64 2022 \u4f30\u8a08\u4e5f\u662f\u505a\u5dee\u4e0d\u591a\u7684\u4e8b\u5427\\n\\n- \u5b78\u66f4\u591a\u6280\u8853\u3001\u57fa\u790e\u77e5\u8b58\\n\\n- \u82f1\u6587\u53e3\u8aaa\\n\\n---\\n\\nThat\'s it, see you in 2022. :innocent:"},{"id":"hello-docusaurus","metadata":{"permalink":"/blog/hello-docusaurus","editUrl":"https://github.com/Apriil15/apriil15.github.io/tree/master/blog/2021-12-25-hello-docusaurus/index.md","source":"@site/blog/2021-12-25-hello-docusaurus/index.md","title":"Hello Docusaurus!","description":"So, today I move my personal website from Hugo to Docusaurus (technically yesterday, because it\'s 12/26 now)","date":"2021-12-25T00:00:00.000Z","formattedDate":"December 25, 2021","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.885,"truncated":true,"authors":[{"name":"apriil15","title":"Back End Engineer","url":"https://github.com/apriil15","imageURL":"https://github.com/apriil15.png","key":"apriil15"}],"prevItem":{"title":"\u56de\u9867 2021","permalink":"/blog/review-2021"}},"content":"So, today I move my personal website from [Hugo](https://gohugo.io/) to [Docusaurus](https://docusaurus.io/) (technically yesterday, because it\'s 12/26 now)\\n\\n\x3c!--truncate--\x3e\\n\\nActually I have known Docusaurus for a few days. I saw [this website](https://pjchender.dev/) at first, then saw one of my friend using it.\\n\\nWhat it attracts my attention is:\\n\\n- Having dark theme natively\\n\\n- A standard theme that it\'s just the style I like\\n\\n- Dinosaur is cute :grinning:\\n\\nPersonal opinions:\\n\\n- I would have trouble making decisions if there are too many themes like Hugo.\\n\\n- After I pick up one theme, maybe it is lack of some features important for me, like dark theme.\\n\\n- Then I fall into a kind of for loop `choose -> drop`, and waste much time.\\n\\nAfter using Docusaurus what I find:\\n\\n- Documentation is clear\\n\\n- Using GitHub Actions is so easy (actually, it\'s my first time to use it)\\n\\nEvery static website framework has its pros and cons, I recommend giving all of them a try, and you can choose what meet your requirements.\\n\\nFinally, hello Docusaurus! :clap:\\n\\n![docusaurus](./docusaurus.jpeg)"}]}')}}]);