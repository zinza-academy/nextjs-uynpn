import { Command, Console } from 'nestjs-console';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as Excel from 'exceljs';
import * as path from 'path';
import { Province } from '../../model/provinces.model';
import { District } from '../../model/districts.model';
import { Ward } from '../../model/wards.model';

@Console()
@Injectable()
export class ImportLocationDataCommand {
  constructor(
    @InjectRepository(Province)
    private provincesRepository: Repository<Province>,
    @InjectRepository(District)
    private districtsRepository: Repository<District>,
    @InjectRepository(Ward)
    private wardsRepository: Repository<Ward>,
  ) {}

  @Command({
    command: 'import-location-data',
    description: 'Import location data from Excel file',
  })
  async importLocationData(): Promise<void> {
    const filePath = path.join(__dirname, '../../../data/location.xlsx');
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(1);

    let currentProvince: Province | null = null;
    let currentDistrict: District | null = null;

    for (let i = 2; i <= worksheet.rowCount; i++) {
      const row = worksheet.getRow(i);
      const provinceName = row.getCell(1).value?.toString();
      const districtName = row.getCell(3).value?.toString();
      const wardName = row.getCell(5).value?.toString();

      if (provinceName) {
        currentProvince = await this.provincesRepository.findOne({ where: { name: provinceName } });
        if (!currentProvince) {
          currentProvince = this.provincesRepository.create({ name: provinceName });
          await this.provincesRepository.save(currentProvince);
        }
      }

      if (districtName && currentProvince) {
        currentDistrict = await this.districtsRepository.findOne({
          where: { name: districtName, province: { id: currentProvince.id } },
        });
        if (!currentDistrict) {
          currentDistrict = this.districtsRepository.create({ 
            name: districtName, 
            province: currentProvince 
          });
          await this.districtsRepository.save(currentDistrict);
        }
      }

      if (wardName && currentDistrict) {
        let ward = await this.wardsRepository.findOne({
          where: { name: wardName, district: { id: currentDistrict.id } },
        });
        if (!ward) {
          ward = this.wardsRepository.create({ 
            name: wardName, 
            district: currentDistrict 
          });
          await this.wardsRepository.save(ward);
        }
      }
    }

    console.log('Location data imported successfully');
  }
}