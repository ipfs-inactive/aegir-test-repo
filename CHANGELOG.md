<a name="0.1.1"></a>
## 0.1.1 (2017-12-10)


### Bug Fixes

* add support for protobuf in object.put ([819bb38](https://github.com/ipfs/js-ipfs-api/commit/819bb38))
* Always return the underlying request object ([b6e5270](https://github.com/ipfs/js-ipfs-api/commit/b6e5270))
* block.get supports multihash as buffers again ([b3dbe45](https://github.com/ipfs/js-ipfs-api/commit/b3dbe45))
* Correct header handling in the browser ([c211299](https://github.com/ipfs/js-ipfs-api/commit/c211299)), closes [#76](https://github.com/ipfs/js-ipfs-api/issues/76)
* correct version number ([70027f6](https://github.com/ipfs/js-ipfs-api/commit/70027f6))
* Depend on babel-runtime directly ([2bbbf6c](https://github.com/ipfs/js-ipfs-api/commit/2bbbf6c))
* Do not catch user errors in the parser ([e7c4afe](https://github.com/ipfs/js-ipfs-api/commit/e7c4afe))
* Do not parse non json responses ([527228d](https://github.com/ipfs/js-ipfs-api/commit/527228d))
* don't let qs mangle binary buffers ([#569](https://github.com/ipfs/js-ipfs-api/issues/569)) ([#570](https://github.com/ipfs/js-ipfs-api/issues/570)) ([6cbd89c](https://github.com/ipfs/js-ipfs-api/commit/6cbd89c))
* Downgrade babel-runtime to v5 ([3d593fa](https://github.com/ipfs/js-ipfs-api/commit/3d593fa))
* handle missing daemon errors ([41c8153](https://github.com/ipfs/js-ipfs-api/commit/41c8153))
* Handle non json formatted errors. ([93944a0](https://github.com/ipfs/js-ipfs-api/commit/93944a0))
* increase memory (to enable release until we got the size of the bundle shaved down ([12c9660](https://github.com/ipfs/js-ipfs-api/commit/12c9660))
* lint ([dfb07a3](https://github.com/ipfs/js-ipfs-api/commit/dfb07a3))
* linting ([723b4b0](https://github.com/ipfs/js-ipfs-api/commit/723b4b0))
* Move build to gulp ([2908e60](https://github.com/ipfs/js-ipfs-api/commit/2908e60))
* Proper request headers for add url ([1108c81](https://github.com/ipfs/js-ipfs-api/commit/1108c81))
* Replace `http.request` with request ([1588294](https://github.com/ipfs/js-ipfs-api/commit/1588294))
* Return req from tail ([0273a3a](https://github.com/ipfs/js-ipfs-api/commit/0273a3a))
* **aegir:** fallback to version 6.0.0 ([18897a0](https://github.com/ipfs/js-ipfs-api/commit/18897a0))
* Update dependencies ([e0924d1](https://github.com/ipfs/js-ipfs-api/commit/e0924d1))
* **block:** cope with the fact that sometimes go-ipfs sends x-stream, other times it doesn't ([5e0ede9](https://github.com/ipfs/js-ipfs-api/commit/5e0ede9))
* **block:** testing ([17f95fb](https://github.com/ipfs/js-ipfs-api/commit/17f95fb))
* **build:** Do not run all deps through babel ([7bbb9be](https://github.com/ipfs/js-ipfs-api/commit/7bbb9be))
* **build:** Export ipfsApi global in browser build ([875a20b](https://github.com/ipfs/js-ipfs-api/commit/875a20b)), closes [#119](https://github.com/ipfs/js-ipfs-api/issues/119)
* **build:** Run everything through babel ([4195e1a](https://github.com/ipfs/js-ipfs-api/commit/4195e1a))
* **config:** send correct user-agent ([3f841b9](https://github.com/ipfs/js-ipfs-api/commit/3f841b9))
* **CR:** apply CR ([c0e66cb](https://github.com/ipfs/js-ipfs-api/commit/c0e66cb))
* **deps:** put streamifier on the right place ([19b50f4](https://github.com/ipfs/js-ipfs-api/commit/19b50f4))
* **get:** properly handled nested content ([0731f45](https://github.com/ipfs/js-ipfs-api/commit/0731f45))
* **lint+unused modules:** Remove the usage of raw buffer loader, upgrade to aegir 6 and fix linting ([833f249](https://github.com/ipfs/js-ipfs-api/commit/833f249))
* **object:** Add new object patch methods ([135739d](https://github.com/ipfs/js-ipfs-api/commit/135739d))
* **request:** Improve json content-type detection ([90ed807](https://github.com/ipfs/js-ipfs-api/commit/90ed807)), closes [/github.com/ipfs/js-ipfs/pull/69/files#r53560321](https://github.com//github.com/ipfs/js-ipfs/pull/69/files/issues/r53560321)
* **request:** Return on parsing error ([9fd8ced](https://github.com/ipfs/js-ipfs-api/commit/9fd8ced))
* Upgrade multipart-stream ([1fd9749](https://github.com/ipfs/js-ipfs-api/commit/1fd9749))


### Features

* add alias for cat under files ([e8c45f9](https://github.com/ipfs/js-ipfs-api/commit/e8c45f9))
* Add bitswap comands ([cb22abe](https://github.com/ipfs/js-ipfs-api/commit/cb22abe))
* Add diag/sys command ([cf8b80a](https://github.com/ipfs/js-ipfs-api/commit/cf8b80a))
* add npm engine ([505ce8e](https://github.com/ipfs/js-ipfs-api/commit/505ce8e))
* Add promise based api ([9b74841](https://github.com/ipfs/js-ipfs-api/commit/9b74841)), closes [#80](https://github.com/ipfs/js-ipfs-api/issues/80)
* **dependencies:** update dependencies ([4cffb47](https://github.com/ipfs/js-ipfs-api/commit/4cffb47))
* Add urls directly. ([9cdb0a2](https://github.com/ipfs/js-ipfs-api/commit/9cdb0a2)), closes [#109](https://github.com/ipfs/js-ipfs-api/issues/109)
* change window to self for webworker support ([e2e3213](https://github.com/ipfs/js-ipfs-api/commit/e2e3213))
* disable phantomJS ([b634684](https://github.com/ipfs/js-ipfs-api/commit/b634684))
* Fix log/tail for 0.3.9 ([9b7e71e](https://github.com/ipfs/js-ipfs-api/commit/9b7e71e))
* **generic:** make it spec compliant ([e97c567](https://github.com/ipfs/js-ipfs-api/commit/e97c567))
* make it lighter on testing ([7925a12](https://github.com/ipfs/js-ipfs-api/commit/7925a12))
* **API:** follow interface-ipfs-core config spec ([940c997](https://github.com/ipfs/js-ipfs-api/commit/940c997))
* **API:** kick off ipfs-api next generation ([0534fa8](https://github.com/ipfs/js-ipfs-api/commit/0534fa8))
* **block:** make the block api follow the interface definition ([a4e43e8](https://github.com/ipfs/js-ipfs-api/commit/a4e43e8))
* **ci:** add node.js 6 (stable) testing ([8a984a8](https://github.com/ipfs/js-ipfs-api/commit/8a984a8))
* **deps:** clean and update ([ba0fc67](https://github.com/ipfs/js-ipfs-api/commit/ba0fc67))
* **deps:** update interface-ipfs-core ([3ff15f7](https://github.com/ipfs/js-ipfs-api/commit/3ff15f7))
* **factory:** create the factory (with socket.io) and attach it to the tests ([d5ec781](https://github.com/ipfs/js-ipfs-api/commit/d5ec781))
* **factory:** use the factory mode ([7a1b9d6](https://github.com/ipfs/js-ipfs-api/commit/7a1b9d6))
* **files.add:** conform with latest interface-ipfs-core spec ([9940742](https://github.com/ipfs/js-ipfs-api/commit/9940742))
* **internals:** use promisify for every exposed interface and apply CR ([5f71752](https://github.com/ipfs/js-ipfs-api/commit/5f71752))
* **ipfs.get:** Add the ipfs.files.get call ([6f97418](https://github.com/ipfs/js-ipfs-api/commit/6f97418))
* **object:** add lru cache to object get/put ([c439f39](https://github.com/ipfs/js-ipfs-api/commit/c439f39))
* **object:** add template support to object.new ([2784863](https://github.com/ipfs/js-ipfs-api/commit/2784863))
* **pin:** spec compliant pinning ([ed07921](https://github.com/ipfs/js-ipfs-api/commit/ed07921))
* **pubsub:** Add pubsub api ([#493](https://github.com/ipfs/js-ipfs-api/issues/493)) ([d2eb925](https://github.com/ipfs/js-ipfs-api/commit/d2eb925))
* **swarm:** make interface-ipfs-core compliant ([f245f27](https://github.com/ipfs/js-ipfs-api/commit/f245f27))
* **swarm:** spec compliant ([5d0a823](https://github.com/ipfs/js-ipfs-api/commit/5d0a823))
* **swarm:** support for new swarm.peers in 0.4.5 ([690a77c](https://github.com/ipfs/js-ipfs-api/commit/690a77c))
* **util:** add fsAdd, streamAdd and urlAdd ([2ae09fb](https://github.com/ipfs/js-ipfs-api/commit/2ae09fb))
* new peer-info ([#542](https://github.com/ipfs/js-ipfs-api/issues/542)) ([820150c](https://github.com/ipfs/js-ipfs-api/commit/820150c))
* support new CID block API ([4314815](https://github.com/ipfs/js-ipfs-api/commit/4314815))
* update all dependencies ([2c4cd7f](https://github.com/ipfs/js-ipfs-api/commit/2c4cd7f))
* Update allowed node versions to >= 4.2.2 ([b1acd6b](https://github.com/ipfs/js-ipfs-api/commit/b1acd6b))
* update files to use async dag-pb api ([ad96d22](https://github.com/ipfs/js-ipfs-api/commit/ad96d22))
* update interface-ipfs-core ([1191bb6](https://github.com/ipfs/js-ipfs-api/commit/1191bb6))
* upgrade to awesome dag-pb ([1e82b8c](https://github.com/ipfs/js-ipfs-api/commit/1e82b8c))
* Use CID for api.get/api.cat ([#555](https://github.com/ipfs/js-ipfs-api/issues/555)) ([da7d0f4](https://github.com/ipfs/js-ipfs-api/commit/da7d0f4))



<a name="14.0.4"></a>
## [14.0.4](https://github.com/ipfs/js-ipfs-api/compare/v14.0.3...v14.0.4) (2017-06-21)


### Bug Fixes

* don't let qs mangle binary buffers ([#569](https://github.com/ipfs/js-ipfs-api/issues/569)) ([#570](https://github.com/ipfs/js-ipfs-api/issues/570)) ([6cbd89c](https://github.com/ipfs/js-ipfs-api/commit/6cbd89c))



<a name="14.0.3"></a>
## [14.0.3](https://github.com/ipfs/js-ipfs-api/compare/v14.0.2...v14.0.3) (2017-05-29)



<a name="14.0.2"></a>
## [14.0.2](https://github.com/ipfs/js-ipfs-api/compare/v14.0.1...v14.0.2) (2017-05-19)


### Features

* Use CID for api.get/api.cat ([#555](https://github.com/ipfs/js-ipfs-api/issues/555)) ([da7d0f4](https://github.com/ipfs/js-ipfs-api/commit/da7d0f4))



<a name="14.0.1"></a>
## [14.0.1](https://github.com/ipfs/js-ipfs-api/compare/v14.0.0...v14.0.1) (2017-05-04)



<a name="14.0.0"></a>
# [14.0.0](https://github.com/ipfs/js-ipfs-api/compare/v13.0.0...v14.0.0) (2017-03-30)


### Features

* new peer-info ([#542](https://github.com/ipfs/js-ipfs-api/issues/542)) ([820150c](https://github.com/ipfs/js-ipfs-api/commit/820150c))
* **pubsub:** Add pubsub api ([#493](https://github.com/ipfs/js-ipfs-api/issues/493)) ([d2eb925](https://github.com/ipfs/js-ipfs-api/commit/d2eb925))



<a name="13.0.0"></a>
# [13.0.0](https://github.com/ipfs/js-ipfs-api/compare/v12.1.7...v13.0.0) (2017-03-22)


### Features

* change window to self for webworker support ([e2e3213](https://github.com/ipfs/js-ipfs-api/commit/e2e3213))



<a name="12.1.7"></a>
## [12.1.7](https://github.com/ipfs/js-ipfs-api/compare/v12.1.6...v12.1.7) (2017-02-09)



<a name="12.1.6"></a>
## [12.1.6](https://github.com/ipfs/js-ipfs-api/compare/v12.1.5...v12.1.6) (2017-02-01)



<a name="12.1.5"></a>
## [12.1.5](https://github.com/ipfs/js-ipfs-api/compare/v12.1.4...v12.1.5) (2017-01-31)


### Bug Fixes

* lint ([dfb07a3](https://github.com/ipfs/js-ipfs-api/commit/dfb07a3))



<a name="12.1.4"></a>
## [12.1.4](https://github.com/ipfs/js-ipfs-api/compare/v12.1.3...v12.1.4) (2017-01-11)



<a name="12.1.3"></a>
## [12.1.3](https://github.com/ipfs/js-ipfs-api/compare/v12.1.2...v12.1.3) (2017-01-10)



<a name="12.1.2"></a>
## [12.1.2](https://github.com/ipfs/js-ipfs-api/compare/v12.1.1...v12.1.2) (2016-12-21)



<a name="12.1.1"></a>
## [12.1.1](https://github.com/ipfs/js-ipfs-api/compare/v12.1.0...v12.1.1) (2016-12-21)



<a name="12.1.0"></a>
# [12.1.0](https://github.com/ipfs/js-ipfs-api/compare/v12.0.3...v12.1.0) (2016-12-12)


### Features

* **object:** add template support to object.new ([2784863](https://github.com/ipfs/js-ipfs-api/commit/2784863))



<a name="12.0.3"></a>
## [12.0.3](https://github.com/ipfs/js-ipfs-api/compare/v12.0.2...v12.0.3) (2016-12-09)


### Bug Fixes

* block.get supports multihash as buffers again ([b3dbe45](https://github.com/ipfs/js-ipfs-api/commit/b3dbe45))



<a name="12.0.2"></a>
## [12.0.2](https://github.com/ipfs/js-ipfs-api/compare/v12.0.1...v12.0.2) (2016-12-01)



<a name="12.0.1"></a>
## [12.0.1](https://github.com/ipfs/js-ipfs-api/compare/v12.0.0...v12.0.1) (2016-11-28)



<a name="12.0.0"></a>
# [12.0.0](https://github.com/ipfs/js-ipfs-api/compare/v11.2.0...v12.0.0) (2016-11-24)



<a name="11.2.0"></a>
# [11.2.0](https://github.com/ipfs/js-ipfs-api/compare/v11.1.0...v11.2.0) (2016-11-24)


### Bug Fixes

* handle missing daemon errors ([41c8153](https://github.com/ipfs/js-ipfs-api/commit/41c8153))
* linting ([723b4b0](https://github.com/ipfs/js-ipfs-api/commit/723b4b0))


### Features

* **swarm:** support for new swarm.peers in 0.4.5 ([690a77c](https://github.com/ipfs/js-ipfs-api/commit/690a77c))
* upgrade to awesome dag-pb ([1e82b8c](https://github.com/ipfs/js-ipfs-api/commit/1e82b8c))



<a name="11.1.0"></a>
# [11.1.0](https://github.com/ipfs/js-ipfs-api/compare/v11.0.1...v11.1.0) (2016-11-08)


### Bug Fixes

* **get:** properly handled nested content ([0731f45](https://github.com/ipfs/js-ipfs-api/commit/0731f45))


### Features

* **object:** add lru cache to object get/put ([c439f39](https://github.com/ipfs/js-ipfs-api/commit/c439f39))
* add npm engine ([505ce8e](https://github.com/ipfs/js-ipfs-api/commit/505ce8e))
* update interface-ipfs-core ([1191bb6](https://github.com/ipfs/js-ipfs-api/commit/1191bb6))



<a name="11.0.1"></a>
## [11.0.1](https://github.com/ipfs/js-ipfs-api/compare/v11.0.0...v11.0.1) (2016-10-29)



<a name="11.0.0"></a>
# [11.0.0](https://github.com/ipfs/js-ipfs-api/compare/v10.0.0...v11.0.0) (2016-10-29)


### Bug Fixes

* increase memory (to enable release until we got the size of the bundle shaved down ([12c9660](https://github.com/ipfs/js-ipfs-api/commit/12c9660))



<a name="10.0.0"></a>
# [10.0.0](https://github.com/ipfs/js-ipfs-api/compare/v9.0.0...v10.0.0) (2016-10-28)


### Features

* disable phantomJS ([b634684](https://github.com/ipfs/js-ipfs-api/commit/b634684))
* support new CID block API ([4314815](https://github.com/ipfs/js-ipfs-api/commit/4314815))
* update files to use async dag-pb api ([ad96d22](https://github.com/ipfs/js-ipfs-api/commit/ad96d22))



<a name="9.0.0"></a>
# [9.0.0](https://github.com/ipfs/js-ipfs-api/compare/v8.0.4...v9.0.0) (2016-09-15)


### Bug Fixes

* Return req from tail ([0273a3a](https://github.com/ipfs/js-ipfs-api/commit/0273a3a))


### Features

* **swarm:** make interface-ipfs-core compliant ([f245f27](https://github.com/ipfs/js-ipfs-api/commit/f245f27))
