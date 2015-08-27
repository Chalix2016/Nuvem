var cmThemeVistaBase = '.';

try
{
	if (myThemeVistaBase)
	{
		cmThemeVistaBase = myThemeVistaBase;
	}
}
catch (e)
{
}

var cmThemeVista =
{
  	    mainFolderLeft: '<div style="width: 14px; height: 28px" class="themeSpacerDiv" />',
        mainFolderRight: '<div style="width: 11px; height: 28px" class="themeSpacerDiv" />',
        mainItemLeft: '<div style="width: 14px; height: 28px" class="themeSpacerDiv" />',
        mainItemRight: '<div style="width: 11px; height: 28px" class="themeSpacerDiv" />',
        folderLeft: '<div style="width: 24px; height: 23px" class="themeSpacerDiv" />',
        folderRight: '<div style="width: 14px; height: 23px" class="themeSpacerDiv" />',
        itemLeft: '<div style="width: 24px; height: 23px" class="themeSpacerDiv" />',
        itemRight: '<div style="width: 14px; height: 23px" class="themeSpacerDiv" />',
        mainSpacing: 0,
        subSpacing: 0,
        delay: 100
};

var cmThemeVistaHSplit = [_cmNoClick, '<td  class="ThemeVistaMenuSplitLeft"><div></div></td>' +
					                          '<td  class="ThemeVistaMenuSplitText"><div></div></td>' +
					                          '<td  class="ThemeVistaMenuSplitRight"><div></div></td>'
		                         ];

var cmThemeVistaMainVSplit = [_cmNoClick, '<div>' +
                            '<table height="30" width="10" ' +
                            ' cellspacing="0"><tr><td class="ThemeVistaHorizontalSplit">' +
                           '|</td></tr></table></div>'];

var cmThemeVistaMainHSplit = [_cmNoClick, '<td  class="ThemeVistaMainSplitLeft"><div></div></td>' +
					                          '<td  class="ThemeVistaMainSplitText"><div></div></td>' +
					                          '<td  class="ThemeVistaMainSplitRight"><div></div></td>'
		                           ];    
 
     