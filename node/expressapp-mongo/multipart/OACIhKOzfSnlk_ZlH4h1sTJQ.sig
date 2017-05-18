<?rsa version="1.0" encoding="utf-8"?>
<Configuration>
	<Product Id="Crypto-C ME">
		<Version>CRYPTO-C ME 3.0.0.1</Version>
		<ReleaseDate>""</ReleaseDate>
		<ExpDate>""</ExpDate>
		<Copyright>
			Copyright (C) RSA
		</Copyright>
		<Library Id="master">cryptocme2</Library>
	</Product>
	<Runtime Id="runtime">
		<LoadOrder>
			<Library Id="ccme_base">ccme_base</Library>
			<Library Id="ccme_ecc">ccme_ecc</Library>
			<Library Id="ccme_eccaccel">ccme_eccaccel</Library>
			<Library Id="ccme_eccnistaccel">ccme_eccnistaccel</Library>
		</LoadOrder>
		<StartupConfig>
			<SelfTest>OnLoad</SelfTest>
		</StartupConfig>
	</Runtime>
	<Signature URI="#ccme_base" Algorithm="FIPS140_INTEGRITY">MC0CFQCtrrOkSp3rRE5rj0MXSz7EkNYAqAIUZH6GZIsZP+0W606KvfXm80k/j0E=</Signature>
	<Signature URI="#ccme_ecc" Algorithm="FIPS140_INTEGRITY">MC4CFQC/2wCTK1jINVgNDpfwUZmASxNvaQIVALAfKjciV6rxaE09zxFV1y3Ov9Ju</Signature>
	<Signature URI="#ccme_eccaccel" Algorithm="FIPS140_INTEGRITY">MCwCFBJ07sqwUeH0wVoygrDrpDVx3QjKAhRr/+UtgGlOtKrZEdT9I5WiLdatDw==</Signature>
	<Signature URI="#ccme_eccnistaccel" Algorithm="FIPS140_INTEGRITY">MC0CFQCLoDlPvMSRYY6ZKDMOCf0PVzfxSAIUCiB3sQ6+RcaUVnPisRgH2NAJozA=</Signature>
	<Signature URI="#master" Algorithm="FIPS140_INTEGRITY">MC0CFBfpgNELbOjMGb4G/YejHifPUiftAhUAtwZad1dQC08TYP+p3AJkcGrB5L4=</Signature>
	<Signature URI="#Crypto-C ME" Algorithm="FIPS140_INTEGRITY">MCwCFBNzPb8I/1RzcsUfGN1BOXB4fGp9AhQs2cDVRhVZBr4gHtn012pIvzgc1A==</Signature>
	<Signature URI="#runtime" Algorithm="FIPS140_INTEGRITY">MC4CFQC7q+QIdPk79N7z1T7gDlv4NEl+3QIVAKQohWt2kgKCcaRpiNRaMEVrNPUe</Signature>
</Configuration>

