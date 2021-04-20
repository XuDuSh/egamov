<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html><head><title></title></head>
<body>


<svg>
<xsl:for-each select="root/графика/эллипс">
<ellipse cx="{@cx}" cy="{@cy}" rx="{@rx}" ry="{@ry}" style="fill:{@заливка}; stroke:{@ободок}; stroke-width:{@ширина-ободка}" />
</xsl:for-each>
</svg>

</body></html>

</xsl:template>

</xsl:stylesheet>