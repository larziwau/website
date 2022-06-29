import { Controller, Post, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateReportDto, ReportDto } from '../../@common/dto/report/report.dto';
import { LoggedInUser } from '../../@common/decorators/logged-in-user.decorator';

@ApiBearerAuth()
@Controller('api/v1/reports')
@ApiTags('Reports')
export class ReportsController {
    constructor(private readonly reportsService: ReportsService) {}

    @Post()
    @ApiOperation({ summary: 'Create a report' })
    @ApiOkResponse({ type: ReportDto, description: 'The newly created report' })
    public CreateReport(@LoggedInUser('id') submitter: number, @Query() query: CreateReportDto): Promise<ReportDto> {
        return void 0;
    }
}