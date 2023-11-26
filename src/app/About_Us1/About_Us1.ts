import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'About_Us1.html',
    selector: 'page-about_-us1',
    styleUrls: ['About_Us1.css', 'About_Us1.scss']
})
export class About_Us1 {
    public $a: ApperyioHelperService;
    public $v: {
        [name: string]: any
    };
    public aioChangeDetector: ChangeDetectorRef;
    public currentItem: any = null;
    @ViewChild('_aio_content') _aio_content;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable?, isSelected?) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __isPropertyInMapping(_currentItem, property) {
        return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
    }
    public __setMapping(data: any = {}, keyName: string, propName?: string): void {
        const changes = data.detail || {};
        if (propName) {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
        this.$aio_changeDetector.detectChanges();
    }
    public __bindedMethods: any = {};
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
        this.$a = this.Apperyio;
        this.$v = this.Apperyio.vars;
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ngOnInit() {
        this.Apperyio.setThinScrollIfNeeded();
    }
    async backbuttonClick__j_41(event?, currentItem?) {
        let __aio_tmp_val__: any;
        /* Navigate to Page */
        this.Apperyio.navigation.back('Screen2');
    }
}